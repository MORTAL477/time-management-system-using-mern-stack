const router = require('express').Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');

router.use(auth);

// ---------- Stats Summary (must be placed before /:id) ----------
router.get('/stats/summary', async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId });
    const now = Date.now();
    const byCategory = {};
    const byDay = {};
    let totalSpentMinutes = 0;
    let totalEstimatedMinutes = 0;
    let runningTask = null;

    for (const t of tasks) {
      totalEstimatedMinutes += t.estimatedMinutes || 0;
      let taskSpent = 0;

      for (const e of t.entries) {
        const isRunning = !e.end;
        const endTime = isRunning ? now : new Date(e.end).getTime();
        const mins = (endTime - new Date(e.start).getTime()) / 60000;
        totalSpentMinutes += mins;
        taskSpent += mins;

        const cat = t.category || 'General';
        byCategory[cat] = (byCategory[cat] || 0) + mins;

        const day = new Date(e.start).toISOString().slice(0, 10);
        byDay[day] = (byDay[day] || 0) + mins;

        if (isRunning && !runningTask) {
          runningTask = {
            id: t._id,
            title: t.title,
            category: t.category,
            startedAt: e.start,
          };
        }
      }
    }

    const last7 = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(now - i * 86400000).toISOString().slice(0, 10);
      last7.push({ day: d, minutes: Math.round(byDay[d] || 0) });
    }

    const completed = tasks.filter((t) => t.status === 'Done').length;
    const inProgress = tasks.filter((t) => t.status === 'In Progress').length;
    const todo = tasks.filter((t) => t.status === 'Todo').length;
    const overdue = tasks.filter(
      (t) => t.status !== 'Done' && t.dueDate && new Date(t.dueDate) < new Date()
    ).length;

    // Productivity Score (0-100) based on task completion and timely progress
    let productivityScore = 0;
    if (tasks.length > 0) {
      const completionRate = completed / tasks.length;
      const overduePenalty = overdue / tasks.length;
      const trackingBonus = totalSpentMinutes > 30 ? 0.2 : totalSpentMinutes / 150;
      productivityScore = Math.min(
        100,
        Math.max(0, Math.round((completionRate * 0.7 - overduePenalty * 0.3 + trackingBonus * 0.3) * 100))
      );
    }

    res.json({
      totalMinutes: Math.round(totalSpentMinutes),
      totalTasks: tasks.length,
      completed,
      inProgress,
      todo,
      overdue,
      totalEstimatedMinutes,
      productivityScore,
      runningTask,
      byCategory: Object.entries(byCategory).map(([category, m]) => ({
        category,
        minutes: Math.round(m),
      })),
      last7,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ---------- Seed Sample Academic Tasks (for College Project Demo) ----------
router.post('/seed', async (req, res) => {
  try {
    const existing = await Task.countDocuments({ user: req.userId });
    if (existing > 0) {
      // Don't duplicate if user already has data, but can still add if requested with query ?force=true
      if (req.query.force !== 'true') {
        return res.status(400).json({
          message: 'You already have tasks. Use force=true if you want to add sample tasks anyway.',
        });
      }
    }

    const now = Date.now();
    const sampleTasks = [
      {
        user: req.userId,
        title: 'MERN Software Engineering Lab - Time Management System',
        description: 'Complete PCCCS594 laboratory assignment using MongoDB, Express, React, and Node.js for Roll No: 8.',
        category: 'Lab Assignment',
        priority: 'High',
        status: 'In Progress',
        dueDate: new Date(now + 2 * 86400000),
        estimatedMinutes: 180,
        entries: [
          {
            start: new Date(now - 7200000), // 2 hours ago
            end: new Date(now - 3600000),   // 1 hour spent
          },
          {
            start: new Date(now - 1800000), // 30 mins ago
            end: new Date(now - 600000),    // 20 mins spent
          },
        ],
      },
      {
        user: req.userId,
        title: 'Data Science ML Feature Engineering Pipeline',
        description: 'Implement pandas and scikit-learn feature transformers, imputations, and cross-validation.',
        category: 'Data Science',
        priority: 'High',
        status: 'Todo',
        dueDate: new Date(now + 3 * 86400000),
        estimatedMinutes: 120,
        entries: [],
      },
      {
        user: req.userId,
        title: 'DBMS B+ Tree Indexing & Query Profiling',
        description: 'Analyze SQL and MongoDB query execution plans, create compound indexes, and benchmark latency.',
        category: 'Database',
        priority: 'Medium',
        status: 'Done',
        dueDate: new Date(now - 86400000),
        estimatedMinutes: 90,
        entries: [
          {
            start: new Date(now - 86400000 * 2),
            end: new Date(now - 86400000 * 2 + 5400000), // 90 mins spent
          },
        ],
      },
      {
        user: req.userId,
        title: 'Design Analysis of Algorithms: Dynamic Programming',
        description: 'Solve Longest Common Subsequence and 0/1 Knapsack problem with memoization table.',
        category: 'Study',
        priority: 'Medium',
        status: 'Done',
        dueDate: new Date(now - 2 * 86400000),
        estimatedMinutes: 60,
        entries: [
          {
            start: new Date(now - 86400000 * 3),
            end: new Date(now - 86400000 * 3 + 3600000), // 60 mins spent
          },
        ],
      },
      {
        user: req.userId,
        title: 'Software Requirements Specification (SRS) Documentation',
        description: 'Document functional requirements, ER diagrams, data flow diagrams (DFD), and UML class diagrams.',
        category: 'Documentation',
        priority: 'Low',
        status: 'Todo',
        dueDate: new Date(now + 5 * 86400000),
        estimatedMinutes: 90,
        entries: [],
      },
    ];

    const created = await Task.insertMany(sampleTasks);
    res.json({ message: 'Sample tasks created successfully', count: created.length, tasks: created });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// ---------- CRUD Operations ----------
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body.title || !req.body.title.trim()) {
      return res.status(400).json({ message: 'Task title is required' });
    }
    const { title, description, category, priority, dueDate, estimatedMinutes } = req.body;
    const task = await Task.create({
      user: req.userId,
      title: title.trim(),
      description: description ? description.trim() : '',
      category: category && category.trim() ? category.trim() : 'General',
      priority: ['Low', 'Medium', 'High'].includes(priority) ? priority : 'Medium',
      dueDate: dueDate ? new Date(dueDate) : undefined,
      estimatedMinutes: Math.max(0, Number(estimatedMinutes) || 0),
    });
    res.status(201).json(task);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, description, category, priority, status, dueDate, estimatedMinutes } = req.body;
    const update = {};
    if (title !== undefined) update.title = title.trim();
    if (description !== undefined) update.description = description.trim();
    if (category !== undefined) update.category = category.trim() || 'General';
    if (priority !== undefined) update.priority = priority;
    if (status !== undefined) update.status = status;
    if (dueDate !== undefined) update.dueDate = dueDate ? new Date(dueDate) : null;
    if (estimatedMinutes !== undefined) update.estimatedMinutes = Math.max(0, Number(estimatedMinutes) || 0);

    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      update,
      { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully', id: req.params.id });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// ---------- Timer Operations ----------
async function stopRunning(userId) {
  const running = await Task.find({ user: userId, 'entries.end': null });
  const now = new Date();
  for (const t of running) {
    t.entries.forEach((e) => {
      if (!e.end) e.end = now;
    });
    await t.save();
  }
}

router.post('/:id/start', async (req, res) => {
  try {
    await stopRunning(req.userId); // Stop any other running timer
    const task = await Task.findOne({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.entries.push({ start: new Date(), end: null });
    if (task.status === 'Todo') task.status = 'In Progress';
    await task.save();
    res.json(task);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post('/:id/stop', async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const now = new Date();
    let stoppedCount = 0;
    task.entries.forEach((e) => {
      if (!e.end) {
        e.end = now;
        stoppedCount++;
      }
    });

    await task.save();
    res.json(task);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

// ---------- Manual Time Logging (e.g. +15m, +30m, +45m) ----------
router.post('/:id/log-time', async (req, res) => {
  try {
    const minutes = Number(req.body.minutes);
    if (!minutes || minutes <= 0) {
      return res.status(400).json({ message: 'Please provide positive minutes to log' });
    }

    const task = await Task.findOne({ _id: req.params.id, user: req.userId });
    if (!task) return res.status(404).json({ message: 'Task not found' });

    const end = new Date();
    const start = new Date(end.getTime() - minutes * 60000);
    task.entries.push({ start, end });
    if (task.status === 'Todo') task.status = 'In Progress';

    await task.save();
    res.json(task);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;

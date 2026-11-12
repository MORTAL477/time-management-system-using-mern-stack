import { useEffect, useState, useCallback } from 'react';
import { api, exportTasksToCSV } from '../api.js';
import Navbar from './Navbar.jsx';
import Stats from './Stats.jsx';
import Pomodoro from './Pomodoro.jsx';
import TaskForm from './TaskForm.jsx';
import TaskItem from './TaskItem.jsx';

export default function Dashboard({ user, onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [stats, setStats] = useState(null);
  const [filter, setFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [now, setNow] = useState(new Date());
  const [error, setError] = useState('');
  const [infoNotice, setInfoNotice] = useState('');

  const loadData = useCallback(async () => {
    try {
      const [tList, sData] = await Promise.all([
        api('/tasks'),
        api('/tasks/stats/summary'),
      ]);
      setTasks(tList);
      setStats(sData);
    } catch (e) {
      if (/token/i.test(e.message)) {
        onLogout();
      } else {
        setError(e.message);
      }
    }
  }, [onLogout]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Update live clock every second for live timer display
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const handleAction = (fn) => async (...args) => {
    try {
      await fn(...args);
      await loadData();
    } catch (e) {
      setError(e.message);
    }
  };

  const createTask = handleAction((formData) => api('/tasks', 'POST', formData));
  const startTimer = handleAction((id) => api(`/tasks/${id}/start`, 'POST'));
  const stopTimer = handleAction((id) => api(`/tasks/${id}/stop`, 'POST'));
  const updateStatus = handleAction((id, status) => api(`/tasks/${id}`, 'PUT', { status }));
  const deleteTask = handleAction((id) => api(`/tasks/${id}`, 'DELETE'));
  const logManualTime = handleAction((id, minutes) =>
    api(`/tasks/${id}/log-time`, 'POST', { minutes })
  );

  const seedSampleTasks = async () => {
    try {
      setError('');
      setInfoNotice('Seeding sample college project tasks...');
      await api('/tasks/seed?force=true', 'POST');
      await loadData();
      setInfoNotice('✅ 5 sample CSE Data Science tasks successfully loaded!');
      setTimeout(() => setInfoNotice(''), 4000);
    } catch (err) {
      setError(err.message);
      setInfoNotice('');
    }
  };

  const exportCSV = () => {
    exportTasksToCSV(tasks);
  };

  // Filter tasks based on status, category, and search query
  const filteredTasks = tasks
    .filter((t) => {
      if (filter !== 'All' && t.status !== filter) return false;
      if (categoryFilter !== 'All' && (t.category || 'General') !== categoryFilter) return false;
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(query);
        const matchesDesc = (t.description || '').toLowerCase().includes(query);
        const matchesCat = (t.category || '').toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCat) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'dueDate') {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      if (sortBy === 'priority') {
        const order = { High: 1, Medium: 2, Low: 3 };
        return (order[a.priority] || 2) - (order[b.priority] || 2);
      }
      if (sortBy === 'timeSpent') {
        const spentA = a.entries.reduce((s, e) => s + ((e.end ? new Date(e.end) : now) - new Date(e.start)), 0);
        const spentB = b.entries.reduce((s, e) => s + ((e.end ? new Date(e.end) : now) - new Date(e.start)), 0);
        return spentB - spentA;
      }
      // default: newest first
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  // Extract unique categories for category filter
  const categories = ['All', ...new Set(tasks.map((t) => t.category || 'General'))];

  return (
    <div className="dashboard-wrapper">
      <Navbar
        user={user}
        onLogout={onLogout}
        onSeed={seedSampleTasks}
        onExport={exportCSV}
      />

      <main className="main-content">
        {error && (
          <div className="notification-banner error-banner">
            <span>⚠️ {error}</span>
            <button className="banner-close" onClick={() => setError('')}>✕</button>
          </div>
        )}

        {infoNotice && (
          <div className="notification-banner info-banner">
            <span>{infoNotice}</span>
            <button className="banner-close" onClick={() => setInfoNotice('')}>✕</button>
          </div>
        )}

        {/* Analytics & Statistics Overview */}
        <Stats stats={stats} />

        {/* Main 2-Column Work Area */}
        <div className="workspace-layout">
          {/* Left Column: Task Creator & Pomodoro */}
          <aside className="sidebar-tools">
            <TaskForm onCreate={createTask} />
            <Pomodoro tasks={tasks} onLogTime={logManualTime} />
          </aside>

          {/* Right Column: Filter Bar & Task List */}
          <section className="tasks-board">
            <div className="board-toolbar card">
              <div className="filter-tabs">
                {['All', 'Todo', 'In Progress', 'Done'].map((st) => (
                  <button
                    key={st}
                    className={`tab-btn ${filter === st ? 'active' : ''}`}
                    onClick={() => setFilter(st)}
                  >
                    {st}
                    {st === 'All'
                      ? ` (${tasks.length})`
                      : ` (${tasks.filter((t) => t.status === st).length})`}
                  </button>
                ))}
              </div>

              <div className="search-and-controls">
                <div className="search-box">
                  <span>🔍</span>
                  <input
                    type="text"
                    placeholder="Search tasks by title or tag..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button className="clear-search" onClick={() => setSearchQuery('')}>✕</button>
                  )}
                </div>

                <div className="select-filters">
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    title="Filter by category"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c === 'All' ? 'All Categories' : `📁 ${c}`}
                      </option>
                    ))}
                  </select>

                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    title="Sort order"
                  >
                    <option value="newest">🕒 Newest First</option>
                    <option value="dueDate">📅 By Due Date</option>
                    <option value="priority">🔥 By Priority</option>
                    <option value="timeSpent">⏱️ Most Time Spent</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Task Cards List */}
            <div className="task-list">
              {filteredTasks.length === 0 ? (
                <div className="card empty-state">
                  <div className="empty-icon">📭</div>
                  <h3>No tasks found</h3>
                  <p className="muted">
                    {tasks.length === 0
                      ? 'You have not added any tasks yet. Click "+ Create New Task" on the left or click "⚡ Load Sample Data" above to start!'
                      : 'No tasks match your current filter or search criteria.'}
                  </p>
                  {tasks.length === 0 && (
                    <button className="primary sm mt-3" onClick={seedSampleTasks}>
                      ⚡ Load Sample Tasks for Roll 8
                    </button>
                  )}
                </div>
              ) : (
                filteredTasks.map((task) => (
                  <TaskItem
                    key={task._id}
                    task={task}
                    now={now}
                    onStart={startTimer}
                    onStop={stopTimer}
                    onStatus={updateStatus}
                    onDelete={deleteTask}
                    onLogManualTime={logManualTime}
                  />
                ))
              )}
            </div>
          </section>
        </div>
      </main>

      <footer className="app-footer">
        <div>
          <strong>Chronos Time Management Software</strong> • Department of Computer Science and Engineering (Data Science)
        </div>
        <div className="footer-sub">
          University of Engineering & Management, Kolkata • PCCCS594: Software Engineering Laboratory using MERN • Student Roll No: <strong>8</strong>
        </div>
      </footer>
    </div>
  );
}

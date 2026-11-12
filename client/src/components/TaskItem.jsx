import { useState } from 'react';
import { fmt, fmtClock, fmtDate } from '../api.js';

export default function TaskItem({
  task,
  now,
  onStart,
  onStop,
  onStatus,
  onDelete,
  onLogManualTime,
}) {
  const [showQuickLog, setShowQuickLog] = useState(false);
  const [customMins, setCustomMins] = useState('');

  const spentSeconds = task.entries.reduce((total, e) => {
    const end = e.end ? new Date(e.end).getTime() : now.getTime();
    return total + (end - new Date(e.start).getTime());
  }, 0) / 1000;

  const spentMinutes = spentSeconds / 60;
  const isRunning = task.entries.some((e) => !e.end);
  const isDone = task.status === 'Done';
  const isOverdue = !isDone && task.dueDate && new Date(task.dueDate) < now;

  // Estimation progress
  const estMinutes = task.estimatedMinutes || 0;
  const estProgress = estMinutes > 0 ? Math.min(100, (spentMinutes / estMinutes) * 100) : 0;
  const isOverBudget = estMinutes > 0 && spentMinutes > estMinutes;

  const handleCustomLog = (e) => {
    e.preventDefault();
    const mins = Number(customMins);
    if (mins > 0 && onLogManualTime) {
      onLogManualTime(task._id, mins);
      setCustomMins('');
      setShowQuickLog(false);
    }
  };

  return (
    <div
      className={`card task-card ${isDone ? 'task-done' : ''} ${isRunning ? 'task-running' : ''}`}
    >
      <div className="task-top">
        <div className="task-heading">
          <div className="title-wrapper">
            {isRunning && <span className="pulsing-dot" title="Timer actively running!" />}
            <h4 className="task-title">{task.title}</h4>
          </div>
          <span className={`badge-priority ${task.priority.toLowerCase()}`}>
            {task.priority} Priority
          </span>
        </div>

        {task.description && <p className="task-desc">{task.description}</p>}

        <div className="task-chips">
          <span className="chip chip-cat">📁 {task.category || 'General'}</span>
          {task.dueDate && (
            <span className={`chip ${isOverdue ? 'chip-overdue' : 'chip-date'}`}>
              📅 {isOverdue ? 'Overdue: ' : 'Due: '}
              {fmtDate(task.dueDate)}
            </span>
          )}
          {estMinutes > 0 && (
            <span className="chip chip-est">🎯 Est: {fmt(estMinutes)}</span>
          )}
        </div>

        {estMinutes > 0 && (
          <div className="estimation-bar-container">
            <div className="est-meta">
              <span>Progress vs Estimate: {fmt(spentMinutes)} / {fmt(estMinutes)}</span>
              <span className={isOverBudget ? 'text-red font-semibold' : ''}>
                {Math.round((spentMinutes / estMinutes) * 100)}%
              </span>
            </div>
            <div className="est-track">
              <div
                className={`est-fill ${isOverBudget ? 'over-budget' : ''}`}
                style={{ width: `${Math.min(100, (spentMinutes / estMinutes) * 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="task-bottom">
        <div className="clock-section">
          <span className={`clock-digits ${isRunning ? 'running' : ''}`}>
            ⏱️ {fmtClock(spentSeconds)}
          </span>
          <span className="spent-summary">({fmt(spentMinutes)})</span>
        </div>

        <div className="task-actions">
          {isRunning ? (
            <button className="danger btn-action" onClick={() => onStop(task._id)}>
              ■ Stop Timer
            </button>
          ) : (
            <button
              className="primary btn-action"
              onClick={() => onStart(task._id)}
              disabled={isDone}
              title={isDone ? 'Task is already marked Done' : 'Start tracking time'}
            >
              ▶ Start Timer
            </button>
          )}

          <select
            className="select-status"
            value={task.status}
            onChange={(e) => onStatus(task._id, e.target.value)}
          >
            <option value="Todo">📝 Todo</option>
            <option value="In Progress">⚡ In Progress</option>
            <option value="Done">✅ Done</option>
          </select>

          <button
            className="ghost sm"
            onClick={() => setShowQuickLog(!showQuickLog)}
            title="Log offline time manually"
          >
            +Log Time
          </button>

          <button
            className="ghost sm btn-delete"
            onClick={() => {
              if (window.confirm(`Delete task "${task.title}"?`)) onDelete(task._id);
            }}
            title="Delete task"
          >
            🗑
          </button>
        </div>
      </div>

      {showQuickLog && (
        <div className="quick-log-drawer">
          <span className="quick-log-title">Quick Add Offline Time:</span>
          <div className="quick-buttons">
            <button className="ghost sm" onClick={() => onLogManualTime(task._id, 15)}>
              +15 mins
            </button>
            <button className="ghost sm" onClick={() => onLogManualTime(task._id, 30)}>
              +30 mins
            </button>
            <button className="ghost sm" onClick={() => onLogManualTime(task._id, 60)}>
              +1 hour
            </button>
          </div>
          <form className="custom-log-form" onSubmit={handleCustomLog}>
            <input
              type="number"
              min="1"
              max="720"
              placeholder="Custom mins"
              value={customMins}
              onChange={(e) => setCustomMins(e.target.value)}
            />
            <button type="submit" className="primary sm">Add</button>
            <button
              type="button"
              className="ghost sm"
              onClick={() => setShowQuickLog(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

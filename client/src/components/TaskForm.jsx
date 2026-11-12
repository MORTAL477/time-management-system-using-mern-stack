import { useState } from 'react';

const defaultForm = {
  title: '',
  description: '',
  category: 'Lab Assignment',
  priority: 'Medium',
  dueDate: '',
  estimatedMinutes: '60',
};

const commonCategories = [
  'Lab Assignment',
  'Data Science',
  'Software Eng',
  'Database',
  'Study',
  'Documentation',
  'Meeting',
  'General',
];

export default function TaskForm({ onCreate }) {
  const [form, setForm] = useState(defaultForm);
  const [loading, setLoading] = useState(false);

  const setField = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const setEstimate = (mins) => setForm({ ...form, estimatedMinutes: String(mins) });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setLoading(true);
    try {
      await onCreate(form);
      setForm(defaultForm);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card task-form" onSubmit={handleSubmit}>
      <div className="form-head">
        <h3>➕ Create New Task</h3>
        <span className="form-sub">Define workload & time estimate</span>
      </div>

      <div className="form-group">
        <label>Task Title *</label>
        <input
          type="text"
          placeholder="e.g. Implement REST API for MERN Lab"
          value={form.title}
          onChange={setField('title')}
          required
        />
      </div>

      <div className="form-group">
        <label>Description (Optional)</label>
        <textarea
          placeholder="Add details, objectives, or notes..."
          value={form.description}
          onChange={setField('description')}
          rows={2}
        />
      </div>

      <div className="grid2">
        <div className="form-group">
          <label>Category</label>
          <input
            list="categories-list"
            value={form.category}
            onChange={setField('category')}
            placeholder="Select or type category"
          />
          <datalist id="categories-list">
            {commonCategories.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>

        <div className="form-group">
          <label>Priority</label>
          <select value={form.priority} onChange={setField('priority')}>
            <option value="Low">🟢 Low Priority</option>
            <option value="Medium">🟡 Medium Priority</option>
            <option value="High">🔴 High Priority</option>
          </select>
        </div>
      </div>

      <div className="grid2">
        <div className="form-group">
          <label>Due Date</label>
          <input
            type="date"
            value={form.dueDate}
            onChange={setField('dueDate')}
          />
        </div>

        <div className="form-group">
          <label>Time Estimate (mins)</label>
          <input
            type="number"
            min="0"
            max="1440"
            placeholder="Minutes (e.g. 90)"
            value={form.estimatedMinutes}
            onChange={setField('estimatedMinutes')}
          />
        </div>
      </div>

      <div className="quick-estimates">
        <span className="quick-est-label">Quick Est:</span>
        <button type="button" className="ghost sm" onClick={() => setEstimate(30)}>30m</button>
        <button type="button" className="ghost sm" onClick={() => setEstimate(60)}>1h</button>
        <button type="button" className="ghost sm" onClick={() => setEstimate(120)}>2h</button>
        <button type="button" className="ghost sm" onClick={() => setEstimate(180)}>3h</button>
      </div>

      <button type="submit" className="primary btn-submit" disabled={loading}>
        {loading ? 'Adding Task...' : '➕ Add Task to Board'}
      </button>
    </form>
  );
}

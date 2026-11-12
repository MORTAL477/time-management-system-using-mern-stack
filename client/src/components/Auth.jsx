import { useState } from 'react';
import { api } from '../api.js';

export default function Auth({ onAuth }) {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const setField = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await api(`/auth/${mode}`, 'POST', form);
      onAuth(res);
    } catch (err) {
      setError(err.message || 'Authentication failed. Please check if backend and MongoDB are running.');
    } finally {
      setLoading(false);
    }
  };

  // Demo user quick login for college professors/evaluators
  const fillDemo = async () => {
    setError('');
    setLoading(true);
    const demoPayload = {
      name: 'Roll 8 CSE-DS Student',
      email: 'roll8.uem@demo.edu',
      password: 'password123',
    };

    try {
      // Try login first
      const res = await api('/auth/login', 'POST', {
        email: demoPayload.email,
        password: demoPayload.password,
      });
      onAuth(res);
    } catch {
      // If user doesn't exist, register demo user automatically
      try {
        const regRes = await api('/auth/register', 'POST', demoPayload);
        onAuth(regRes);
      } catch (regErr) {
        setError(regErr.message || 'Failed to auto-sign in demo account');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Top Academic Banner */}
      <div className="auth-academic-banner">
        <span className="inst-name">🏛️ University of Engineering & Management, Kolkata</span>
        <span className="inst-sub">
          Dept. of Computer Science & Engineering (Data Science) • Even Semester 2026
        </span>
        <span className="paper-info">
          Software Engineering Laboratory using MERN (PCCCS594) • Roll No: <strong>8</strong>
        </span>
      </div>

      <div className="auth-card-wrap">
        <form className="card auth-card" onSubmit={handleSubmit}>
          <div className="auth-head">
            <div className="brand-logo">⏱️</div>
            <h2>Chronos Time Management</h2>
            <p className="auth-sub">
              {mode === 'login' ? 'Welcome back! Sign in to continue.' : 'Create an account to start tracking.'}
            </p>
          </div>

          {error && <div className="error-box">{error}</div>}

          {mode === 'register' && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="e.g. Souhardya / Student Name"
                value={form.name}
                onChange={setField('name')}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>College / Personal Email</label>
            <input
              type="email"
              placeholder="e.g. student@uem.edu.in"
              value={form.email}
              onChange={setField('email')}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={setField('password')}
              required
              minLength={4}
            />
          </div>

          <button type="submit" className="primary btn-block" disabled={loading}>
            {loading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>

          <button
            type="button"
            className="ghost sm demo-btn btn-block mt-2"
            onClick={fillDemo}
            disabled={loading}
          >
            ⚡ 1-Click Demo Login (Roll 8 Account)
          </button>

          <div className="auth-switch">
            <span>
              {mode === 'login' ? "Don't have an account? " : 'Already registered? '}
            </span>
            <a
              href="#switch"
              onClick={(e) => {
                e.preventDefault();
                setError('');
                setMode(mode === 'login' ? 'register' : 'login');
              }}
            >
              {mode === 'login' ? 'Register here' : 'Sign in here'}
            </a>
          </div>
        </form>
      </div>

      <footer className="auth-footer">
        Time Management Software • MERN Stack Academic Project • Roll No. 8
      </footer>
    </div>
  );
}

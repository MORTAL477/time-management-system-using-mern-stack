import { useState, useEffect } from 'react';

export default function Navbar({ user, onLogout, onSeed, onExport, onOpenPomodoro }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="academic-header">
      {/* College & Department Academic Badge */}
      <div className="academic-banner">
        <div className="banner-left">
          <span className="college-badge">🏛️ UEM Kolkata</span>
          <span className="banner-text">
            Dept. of Computer Science & Engineering (Data Science)
          </span>
          <span className="dot-sep">•</span>
          <span className="course-code">PCCCS594: Software Engineering Lab (MERN)</span>
        </div>
        <div className="banner-right">
          <span className="roll-badge">Roll No: <strong>8</strong></span>
        </div>
      </div>

      {/* Main App Navigation Bar */}
      <div className="app-navbar">
        <div className="brand">
          <div className="brand-icon">⏱️</div>
          <div>
            <h1 className="brand-title">Chronos</h1>
            <span className="brand-subtitle">Time Management System</span>
          </div>
        </div>

        <div className="nav-actions">
          <div className="live-clock">
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </div>

          <button
            className="ghost sm seed-btn"
            onClick={onSeed}
            title="Load realistic CSE Data Science tasks with sample time logs"
          >
            ⚡ Load Sample Data
          </button>

          <button
            className="ghost sm export-btn"
            onClick={onExport}
            title="Export timesheet report to CSV for academic submission"
          >
            📥 Export CSV
          </button>

          <div className="user-profile">
            <div className="avatar">{user.name ? user.name[0].toUpperCase() : 'U'}</div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-role">Student (Roll #8)</span>
            </div>
            <button className="ghost sm logout-btn" onClick={onLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}


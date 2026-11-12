import { useState, useEffect, useRef } from 'react';
import { fmtClock } from '../api.js';

export default function Pomodoro({ tasks, onLogTime }) {
  const [mode, setMode] = useState('focus'); // 'focus' (25m), 'short' (5m), 'long' (15m)
  const durations = { focus: 25 * 60, short: 5 * 60, long: 15 * 60 };

  const [timeLeft, setTimeLeft] = useState(durations.focus);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [collapsed, setCollapsed] = useState(false);

  // Play audio chime using Web Audio API
  const playChime = () => {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // AudioContext may be blocked before first user gesture
    }
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isRunning && timeLeft === 0) {
      setIsRunning(false);
      playChime();

      if (mode === 'focus') {
        setSessionsCompleted((c) => c + 1);
        if (selectedTaskId && onLogTime) {
          onLogTime(selectedTaskId, 25);
        }
        alert('🎉 Focus session completed! Great job! Take a short break.');
        switchMode('short');
      } else {
        alert('☕ Break is over! Ready to focus again?');
        switchMode('focus');
      }
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, selectedTaskId, onLogTime]);

  const switchMode = (newMode) => {
    setMode(newMode);
    setIsRunning(false);
    setTimeLeft(durations[newMode]);
  };

  const toggleRun = () => setIsRunning(!isRunning);

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(durations[mode]);
  };

  const progress = ((durations[mode] - timeLeft) / durations[mode]) * 100;

  return (
    <div className="card pomodoro-card">
      <div className="pomo-head">
        <div className="pomo-title">
          <h3>🍅 Pomodoro Focus Timer</h3>
          <span className="pomo-sub">Deep work intervals & breaks</span>
        </div>
        <button
          className="ghost sm"
          onClick={() => setCollapsed(!collapsed)}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? '▼ Show' : '▲ Hide'}
        </button>
      </div>

      {!collapsed && (
        <>
          <div className="pomo-modes">
            <button
              className={`pomo-pill ${mode === 'focus' ? 'active' : ''}`}
              onClick={() => switchMode('focus')}
            >
              Focus (25m)
            </button>
            <button
              className={`pomo-pill ${mode === 'short' ? 'active' : ''}`}
              onClick={() => switchMode('short')}
            >
              Short Break (5m)
            </button>
            <button
              className={`pomo-pill ${mode === 'long' ? 'active' : ''}`}
              onClick={() => switchMode('long')}
            >
              Long Break (15m)
            </button>
          </div>

          <div className="pomo-display">
            <div className="pomo-time">{fmtClock(timeLeft).slice(3)}</div>
            <div className="pomo-progress-track">
              <div
                className={`pomo-progress-bar ${mode}`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="pomo-session-tag">
              {mode === 'focus' ? '🎯 Focus Mode' : '☕ Rest & Rejuvenate'} • Completed Today: <strong>{sessionsCompleted}</strong>
            </div>
          </div>

          <div className="pomo-controls">
            <button
              className={isRunning ? 'danger' : 'primary pomo-btn'}
              onClick={toggleRun}
            >
              {isRunning ? '⏸ Pause' : '▶ Start Timer'}
            </button>
            <button className="ghost pomo-btn" onClick={reset}>
              ↺ Reset
            </button>
          </div>

          {tasks && tasks.length > 0 && mode === 'focus' && (
            <div className="pomo-task-picker">
              <label>Link to task (logs 25m upon completion):</label>
              <select
                value={selectedTaskId}
                onChange={(e) => setSelectedTaskId(e.target.value)}
              >
                <option value="">-- No task selected (Solo focus) --</option>
                {tasks
                  .filter((t) => t.status !== 'Done')
                  .map((t) => (
                    <option key={t._id} value={t._id}>
                      {t.title} ({t.category})
                    </option>
                  ))}
              </select>
            </div>
          )}
        </>
      )}
    </div>
  );
}


import { fmt } from '../api.js';

export default function Stats({ stats }) {
  if (!stats) return null;

  const maxDay = Math.max(1, ...stats.last7.map((d) => d.minutes));
  const maxCat = Math.max(1, ...stats.byCategory.map((c) => c.minutes));

  // Compute completion percentage
  const completionRate = stats.totalTasks > 0
    ? Math.round((stats.completed / stats.totalTasks) * 100)
    : 0;

  // Productivity Score Badge
  const score = stats.productivityScore || 0;
  const scoreClass = score >= 75 ? 'score-high' : score >= 45 ? 'score-med' : 'score-low';
  const scoreLabel = score >= 75 ? 'Excellent' : score >= 45 ? 'On Track' : 'Needs Focus';

  return (
    <div className="stats-container">
      {/* 5 High-Impact Metric Tiles */}
      <div className="tiles-grid">
        <div className="card stat-tile">
          <div className="tile-icon">⏳</div>
          <div className="tile-content">
            <span className="tile-value">{fmt(stats.totalMinutes)}</span>
            <span className="tile-label">Total Time Tracked</span>
          </div>
        </div>

        <div className="card stat-tile">
          <div className="tile-icon">📋</div>
          <div className="tile-content">
            <span className="tile-value">{stats.totalTasks}</span>
            <span className="tile-label">
              Tasks ({stats.completed} Done • {stats.inProgress || 0} Active)
            </span>
          </div>
        </div>

        <div className="card stat-tile">
          <div className="tile-icon">🎯</div>
          <div className="tile-content">
            <span className="tile-value">{completionRate}%</span>
            <span className="tile-label">Completion Rate</span>
          </div>
        </div>

        <div className="card stat-tile">
          <div className="tile-icon">{stats.overdue > 0 ? '⚠️' : '✅'}</div>
          <div className="tile-content">
            <span className={`tile-value ${stats.overdue > 0 ? 'text-red' : ''}`}>
              {stats.overdue}
            </span>
            <span className="tile-label">Overdue Tasks</span>
          </div>
        </div>

        <div className="card stat-tile">
          <div className="tile-icon">⚡</div>
          <div className="tile-content">
            <div className="score-row">
              <span className="tile-value">{score}/100</span>
              <span className={`badge-score ${scoreClass}`}>{scoreLabel}</span>
            </div>
            <span className="tile-label">Productivity Index</span>
          </div>
        </div>
      </div>

      {/* Analytics Charts Grid */}
      <div className="stats-charts-grid">
        {/* Daily Time Chart (Last 7 Days) */}
        <div className="card chart-card">
          <div className="chart-header">
            <h3>📊 Last 7 Days Activity</h3>
            <span className="chart-sub">Tracked focus hours</span>
          </div>
          <div className="bars-container">
            {stats.last7.map((d) => {
              const dayDate = new Date(d.day);
              const isToday = d.day === new Date().toISOString().slice(0, 10);
              const heightPct = Math.max(4, Math.round((d.minutes / maxDay) * 100));

              return (
                <div key={d.day} className={`bar-col ${isToday ? 'today' : ''}`}>
                  <span className="bar-tooltip">{fmt(d.minutes)}</span>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="bar-day">
                    {dayDate.toLocaleDateString(undefined, { weekday: 'short' })}
                  </span>
                  <span className="bar-date">
                    {dayDate.toLocaleDateString(undefined, { day: 'numeric', month: 'numeric' })}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card chart-card">
          <div className="chart-header">
            <h3>🏷️ Time by Category</h3>
            <span className="chart-sub">Distribution of effort</span>
          </div>
          <div className="categories-list">
            {stats.byCategory.length === 0 ? (
              <p className="muted center py-4">No logged time yet. Start a timer to see category breakdown.</p>
            ) : (
              stats.byCategory.map((c) => {
                const pct = stats.totalMinutes > 0
                  ? Math.round((c.minutes / stats.totalMinutes) * 100)
                  : 0;
                return (
                  <div key={c.category} className="cat-row">
                    <div className="cat-meta">
                      <span className="cat-name">{c.category}</span>
                      <span className="cat-duration">{fmt(c.minutes)} ({pct}%)</span>
                    </div>
                    <div className="cat-bar-track">
                      <div
                        className="cat-bar-fill"
                        style={{ width: `${(c.minutes / maxCat) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

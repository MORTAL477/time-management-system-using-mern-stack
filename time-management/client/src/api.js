export async function api(path, method = 'GET', body) {
  const token = localStorage.getItem('token');
  const res = await fetch('/api' + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: 'Bearer ' + token } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data;
}

export const fmt = (mins) => {
  if (mins === undefined || mins === null || isNaN(mins)) return '0m';
  const m = Math.max(0, Math.round(mins));
  if (m >= 60) {
    const hrs = Math.floor(m / 60);
    const rem = m % 60;
    return rem > 0 ? `${hrs}h ${rem}m` : `${hrs}h`;
  }
  return `${m}m`;
};

export const fmtClock = (secs) => {
  const s = Math.max(0, Math.floor(secs || 0));
  const p = (n) => String(n).padStart(2, '0');
  const hrs = Math.floor(s / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const remSecs = s % 60;
  return `${p(hrs)}:${p(mins)}:${p(remSecs)}`;
};

export const fmtDate = (d) => {
  if (!d) return '';
  const date = new Date(d);
  if (isNaN(date.getTime())) return '';
  return date.toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export function exportTasksToCSV(tasks) {
  if (!tasks || tasks.length === 0) {
    alert('No tasks to export.');
    return;
  }

  const now = Date.now();
  const rows = [
    [
      'Task ID',
      'Title',
      'Category',
      'Priority',
      'Status',
      'Due Date',
      'Estimated (mins)',
      'Actual Spent (mins)',
      'Variance (mins)',
      'Created At',
    ],
  ];

  for (const t of tasks) {
    const spentMins = Math.round(
      t.entries.reduce((sum, e) => {
        const end = e.end ? new Date(e.end).getTime() : now;
        return sum + (end - new Date(e.start).getTime());
      }, 0) / 60000
    );
    const est = t.estimatedMinutes || 0;
    const variance = spentMins - est; // positive = over estimate, negative = under estimate

    rows.push([
      `"${t._id}"`,
      `"${(t.title || '').replace(/"/g, '""')}"`,
      `"${(t.category || 'General').replace(/"/g, '""')}"`,
      `"${t.priority}"`,
      `"${t.status}"`,
      `"${t.dueDate ? new Date(t.dueDate).toISOString().slice(0, 10) : 'N/A'}"`,
      est,
      spentMins,
      variance,
      `"${new Date(t.createdAt).toISOString()}"`,
    ]);
  }

  const csvContent = 'data:text/csv;charset=utf-8,' + rows.map((e) => e.join(',')).join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute(
    'download',
    `Time_Management_Timesheet_Roll8_${new Date().toISOString().slice(0, 10)}.csv`
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

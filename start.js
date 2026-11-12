/**
 * Chronos - Time Management Software
 * University of Engineering & Management, Kolkata
 * Department of Computer Science & Engineering (Data Science)
 * Software Engineering Laboratory using MERN (PCCCS594) - Roll No: 8
 *
 * Unified single-command runner for backend server and frontend client.
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('\x1b[36m%s\x1b[0m', `
======================================================================
  CHRONOS: TIME MANAGEMENT SOFTWARE (MERN STACK)
  University of Engineering & Management, Kolkata
  Department of Computer Science & Engineering (Data Science)
  Paper: Software Engineering Laboratory using MERN (PCCCS594)
  Student Roll No: 8
======================================================================
`);

const rootDir = __dirname;
const serverDir = path.join(rootDir, 'server');
const clientDir = path.join(rootDir, 'client');
const viteScript = path.join(clientDir, 'node_modules', 'vite', 'bin', 'vite.js');

console.log('\x1b[33m%s\x1b[0m', '🚀 Starting Time Management System (Backend + Frontend)...');

// 1. Launch Server Process (Node -> server.js)
console.log('\x1b[34m%s\x1b[0m', '➜ Launching Express + MongoDB Server on http://localhost:5000');
const serverProcess = spawn('node', ['server.js'], {
  cwd: serverDir,
  stdio: 'pipe',
  shell: false,
  env: { ...process.env, PORT: '5000' }
});

serverProcess.stdout.on('data', (data) => {
  const text = data.toString();
  text.split('\n').filter(Boolean).forEach((line) => {
    console.log(`\x1b[36m[SERVER]\x1b[0m ${line}`);
  });
});

serverProcess.stderr.on('data', (data) => {
  const text = data.toString();
  text.split('\n').filter(Boolean).forEach((line) => {
    console.error(`\x1b[31m[SERVER-ERR]\x1b[0m ${line}`);
  });
});

// 2. Launch Client Process (Node -> vite.js)
// Note: Vite opens exactly 1 browser tab via server.open in vite.config.js
console.log('\x1b[32m%s\x1b[0m', '➜ Launching React Frontend on http://localhost:5173\n');
const clientArgs = fs.existsSync(viteScript) ? [viteScript] : ['run', 'dev'];
const clientCommand = fs.existsSync(viteScript) ? 'node' : (process.platform === 'win32' ? 'npm.cmd' : 'npm');

const clientProcess = spawn(clientCommand, clientArgs, {
  cwd: clientDir,
  stdio: 'pipe',
  shell: false
});

clientProcess.stdout.on('data', (data) => {
  const text = data.toString();
  text.split('\n').filter(Boolean).forEach((line) => {
    console.log(`\x1b[32m[CLIENT]\x1b[0m ${line}`);
  });
});

clientProcess.stderr.on('data', (data) => {
  const text = data.toString();
  text.split('\n').filter(Boolean).forEach((line) => {
    console.error(`\x1b[33m[CLIENT-LOG]\x1b[0m ${line}`);
  });
});

// Clean shutdown handler
function shutdown() {
  console.log('\n\x1b[33m%s\x1b[0m', '🛑 Stopping all services...');
  try {
    if (serverProcess && !serverProcess.killed) {
      serverProcess.kill('SIGTERM');
    }
    if (clientProcess && !clientProcess.killed) {
      clientProcess.kill('SIGTERM');
    }
  } catch (err) {
    // ignore
  }
  process.exit(0);
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

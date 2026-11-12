require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// Health & Academic project info endpoint
app.get('/api/health', (req, res) => {
  const isMongoReady = mongoose.connection.readyState === 1;
  res.json({
    status: 'ok',
    project: 'Time Management System',
    paper: 'Software Engineering Laboratory using MERN (PCCCS594)',
    rollNo: 8,
    department: 'Computer Science and Engineering (Data Science)',
    institution: 'University of Engineering & Management, Kolkata',
    mongoStatus: isMongoReady ? 'connected' : 'disconnected',
    mongoReadyState: mongoose.connection.readyState,
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString()
  });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

// 404 handler for API routes
app.use((req, res) => {
  res.status(404).json({ message: `Route ${req.method} ${req.url} not found` });
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/timemanagement';

// Start HTTP server immediately
app.listen(PORT, () => {
  console.log('================================================================');
  console.log(' ⏱️  CHRONOS: TIME MANAGEMENT SOFTWARE (MERN)');
  console.log('    Subject: Software Engineering Laboratory (PCCCS594)');
  console.log('    Roll No: 8 | CSE Data Science | UEM Kolkata');
  console.log(`    API Server running on: http://localhost:${PORT}`);
  console.log(`    Target Database: ${MONGO_URI}`);
  console.log('================================================================');
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(' ✅ MongoDB connected successfully to "timemanagement" database.');
  })
  .catch((err) => {
    console.error(' ⚠️  MongoDB connection warning:', err.message);
    console.log('    👉 Make sure MongoDB is running locally (e.g. run "net start MongoDB")');
    console.log('       or specify a cloud MONGO_URI in server/.env');
  });

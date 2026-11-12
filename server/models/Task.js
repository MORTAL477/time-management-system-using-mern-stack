const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, default: null }, // null => timer currently running
});

const taskSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    category: { type: String, default: 'General', trim: true },
    priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Medium' },
    status: { type: String, enum: ['Todo', 'In Progress', 'Done'], default: 'Todo' },
    dueDate: { type: Date },
    estimatedMinutes: { type: Number, default: 0 },
    entries: [entrySchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);

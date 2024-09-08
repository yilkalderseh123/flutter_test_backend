const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  note: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  date: {
    type: String,
    required: true
  },
  startTime: String,
  endTime: String,
  color: Number,
  remind: Number,
  repeat: String,
});

module.exports = mongoose.model('Task', TaskSchema);

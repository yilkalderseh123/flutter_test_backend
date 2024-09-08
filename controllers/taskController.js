const Task = require('../models/Task');

// Add task
const addTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const newTask = await task.save();
    res.json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete task
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update task
const markTaskCompleted = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    task.isCompleted = true;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addTask,
  getTasks,
  deleteTask,
  markTaskCompleted
};

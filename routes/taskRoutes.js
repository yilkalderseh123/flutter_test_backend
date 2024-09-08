const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/tasks', taskController.addTask);
router.get('/tasks', taskController.getTasks);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.markTaskCompleted);

module.exports = router;

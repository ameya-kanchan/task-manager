const express = require('express');
const router = express.Router();
const taskController = require('../contollers/taskContoller');
const { taskValidationRules } = require('../middleware/validateTask'); // Import validation rules

// Define routes for task management with validation middleware
router.post('/', taskValidationRules(), taskController.createTask);      // Create a new task with validation
router.get('/', taskController.getAllTasks);      // Get all tasks
router.get('/:id', taskController.getTaskById);   // Get a specific task by ID
router.put('/:id', taskValidationRules(), taskController.updateTaskById); // Update a specific task by ID with validation
router.delete('/:id', taskController.deleteTaskById); // Delete a specific task by ID

module.exports = router;
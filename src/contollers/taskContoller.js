const { validationResult } = require('express-validator');
const db = require('../database');
const Task = require('../models/taskModel');
const taskService = require('../services/taskServices');

// Create Task 
const createTask = async (req, res) => {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { title, description, completed } = req.body;

    try {
        const newTask = await taskService.createTask(title, description, completed);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
};

// Read All Tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving tasks', error });
    }
};

// Read Task by ID
const getTaskById = async (req, res) => {
    const taskId = parseInt(req.params.id);

    try {
        const task = await taskService.getTaskById(taskId);
        
        if (!task) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving task', error });
    }
};

// Update Task by ID
const updateTaskById = async (req, res) => {
    const taskId = parseInt(req.params.id);

    const { title, description, completed } = req.body;

    try {
        // Prepare updated data
        const updatedData = {};
        if (title !== undefined) updatedData.title = title;
        if (description !== undefined) updatedData.description = description;
        if (completed !== undefined) updatedData.completed = completed;

        const updatedTask = await taskService.updateTaskById(taskId, updatedData);

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
};

// Delete Task by ID
const deleteTaskById = async (req, res) => {
    const taskId = parseInt(req.params.id);

    try {
        // Check if the task exists
        const existingTask = await taskService.getTaskById(taskId);
        
        if (!existingTask) {
            return res.status(404).json({ message: 'Task not found.' });
        }

        await taskService.deleteTaskById(taskId);

        res.status(204).send(); // No content response
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
};

// Exporting the controller functions
module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
};
const Task = require('../models/taskModel'); 

// Create Task
const createTask = async (title, description, completed) => {
    return await Task.create({ title, description, completed });
};

// Get All Tasks
const getAllTasks = async () => {
    return await Task.findAll();
};

// Get Task by ID
const getTaskById = async (id) => {
    return await Task.findByPk(id);
};

// Update Task by ID
const updateTaskById = async (id, updatedData) => {
    const task = await getTaskById(id);
    if (!task) {
        return null;
    }
    return await task.update(updatedData);
};

// Delete Task by ID
const deleteTaskById = async (id) => {
    const task = await getTaskById(id);
    if (!task) {
        return null;
    }
    await task.destroy();
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
};
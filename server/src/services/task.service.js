const Task = require("../models/task.model");

// Create Task
const createTask = (data) => {

    const {
        title,
        description = ""
    } = data;

    return Task.createTask(title, description);

};

// Get All Tasks
const getAllTasks = () => {

    return Task.getAllTasks();

};

module.exports = {
    createTask,
    getAllTasks
};
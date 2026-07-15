const Task = require("../models/task.model");

// Create
const addTask = (req, res) => {

    const {

        title,
        description,
        priority,
        dueDate,
        dueTime,
        category

    } = req.body;

    if (!title) {

        return res.status(400).json({

            success: false,
            message: "Title is required"

        });

    }

    const id = Task.createTask(
        title,
        description,
        priority,
        dueDate,
        dueTime,
        category
    );

    res.status(201).json({

        success: true,
        message: "Task Created",
        taskId: id

    });

};

// Get All
const getTasks = (req, res) => {

    res.json({

        success: true,

        data: Task.getAllTasks()

    });

};

// Get By ID
const getTask = (req, res) => {

    const task = Task.getTaskById(req.params.id);

    if (!task) {

        return res.status(404).json({

            success: false,
            message: "Task not found"

        });

    }

    res.json({

        success: true,

        data: task

    });

};

// Update
const editTask = (req, res) => {

    const {

        title,
        description,
        priority,
        dueDate,
        dueTime,
        category

    } = req.body;

    Task.updateTask(
        req.params.id,
        title,
        description,
        priority,
        dueDate,
        dueTime,
        category
    );

    res.json({

        success: true,

        message: "Task Updated"

    });

};

// Delete
const removeTask = (req, res) => {

    Task.deleteTask(req.params.id);

    res.json({

        success: true,

        message: "Task Deleted"

    });

};

// Update Status
const completeTask = (req, res) => {

    const { status } = req.body;

    Task.updateStatus(req.params.id, status);

    res.json({

        success: true,

        message: "Status Updated"

    });

};

module.exports = {

    addTask,
    getTasks,
    getTask,
    editTask,
    removeTask,
    completeTask

};
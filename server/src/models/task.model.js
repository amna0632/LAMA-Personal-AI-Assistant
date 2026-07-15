const db = require("../database/database");

// Create Task
const createTask = (
    title,
    description,
    priority = "Medium",
    dueDate = null,
    dueTime = null,
    category = null
) => {

    const stmt = db.prepare(`
        INSERT INTO tasks
        (title, description, priority, dueDate, dueTime, category)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
        title,
        description,
        priority,
        dueDate,
        dueTime,
        category
    );

    return result.lastInsertRowid;
};

// Get All Tasks
const getAllTasks = () => {

    return db.prepare(`
        SELECT *
        FROM tasks
        ORDER BY id DESC
    `).all();

};

// Get Single Task
const getTaskById = (id) => {

    return db.prepare(`
        SELECT *
        FROM tasks
        WHERE id = ?
    `).get(id);

};

// Update Task
const updateTask = (
    id,
    title,
    description,
    priority,
    dueDate,
    dueTime,
    category
) => {

    return db.prepare(`
        UPDATE tasks
        SET
            title=?,
            description=?,
            priority=?,
            dueDate=?,
            dueTime=?,
            category=?
        WHERE id=?
    `).run(
        title,
        description,
        priority,
        dueDate,
        dueTime,
        category,
        id
    );

};

// Delete Task
const deleteTask = (id) => {

    return db.prepare(`
        DELETE FROM tasks
        WHERE id=?
    `).run(id);

};

// Update Status
const updateStatus = (id, status) => {

    return db.prepare(`
        UPDATE tasks
        SET status=?
        WHERE id=?
    `).run(status, id);

};

module.exports = {

    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
    updateStatus

};
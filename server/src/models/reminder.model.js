const db = require("../database/database");

// Create Reminder
const createReminder = (
    title,
    message,
    reminderDate,
    reminderTime,
    repeatType = "none"
) => {

    const stmt = db.prepare(`
        INSERT INTO reminders
        (
            title,
            message,
            reminderDate,
            reminderTime,
            repeatType
        )
        VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
        title,
        message,
        reminderDate,
        reminderTime,
        repeatType
    );

    return result.lastInsertRowid;
};

// Get All Reminders
const getAllReminders = () => {

    return db.prepare(`
        SELECT *
        FROM reminders
        ORDER BY id DESC
    `).all();

};

// Get Reminder By ID
const getReminderById = (id) => {

    return db.prepare(`
        SELECT *
        FROM reminders
        WHERE id = ?
    `).get(id);

};

// Get Pending Reminders
const getPendingReminders = () => {

    return db.prepare(`
        SELECT *
        FROM reminders
        WHERE status = 'Pending'
    `).all();

};

// Complete Reminder
const completeReminder = (id) => {

    return db.prepare(`
        UPDATE reminders
        SET status = 'Completed'
        WHERE id = ?
    `).run(id);

};

// Delete Reminder
const deleteReminder = (id) => {

    return db.prepare(`
        DELETE FROM reminders
        WHERE id = ?
    `).run(id);

};

module.exports = {
    createReminder,
    getAllReminders,
    getReminderById,
    getPendingReminders,
    completeReminder,
    deleteReminder
};
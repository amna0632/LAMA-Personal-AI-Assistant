const db = require("../database/database");

const globalSearch = (keyword) => {

    const searchText = `%${keyword}%`;

    // Search Tasks
    const tasks = db.prepare(`
        SELECT
            id,
            title,
            description,
            status,
            priority
        FROM tasks
        WHERE
            title LIKE ?
            OR description LIKE ?
    `).all(searchText, searchText);

    // Search Notes
    const notes = db.prepare(`
        SELECT
            id,
            title,
            content,
            category
        FROM notes
        WHERE
            title LIKE ?
            OR content LIKE ?
    `).all(searchText, searchText);

    // Search Reminders
    const reminders = db.prepare(`
        SELECT
            id,
            title,
            message,
            reminderDate,
            reminderTime,
            status
        FROM reminders
        WHERE
            title LIKE ?
            OR message LIKE ?
    `).all(searchText, searchText);

    return {
        tasks,
        notes,
        reminders
    };
};

module.exports = {
    globalSearch
};
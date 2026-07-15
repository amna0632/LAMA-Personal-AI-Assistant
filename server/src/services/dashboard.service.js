const db = require("../database/database");

const getDashboardData = () => {

    // Tasks
    const totalTasks = db.prepare(`
        SELECT COUNT(*) AS total
        FROM tasks
    `).get();

    const completedTasks = db.prepare(`
        SELECT COUNT(*) AS total
        FROM tasks
        WHERE status='Completed'
    `).get();

    const pendingTasks = db.prepare(`
        SELECT COUNT(*) AS total
        FROM tasks
        WHERE status='Pending'
    `).get();

    // Notes
    const totalNotes = db.prepare(`
        SELECT COUNT(*) AS total
        FROM notes
    `).get();

    // Reminders
    const totalReminders = db.prepare(`
        SELECT COUNT(*) AS total
        FROM reminders
    `).get();

    const pendingReminders = db.prepare(`
        SELECT COUNT(*) AS total
        FROM reminders
        WHERE status='Pending'
    `).get();

    const completedReminders = db.prepare(`
        SELECT COUNT(*) AS total
        FROM reminders
        WHERE status='Completed'
    `).get();

    return {

        tasks: {

            total: totalTasks.total,
            completed: completedTasks.total,
            pending: pendingTasks.total

        },

        notes: {

            total: totalNotes.total

        },

        reminders: {

            total: totalReminders.total,
            pending: pendingReminders.total,
            completed: completedReminders.total

        }

    };

};

module.exports = {
    getDashboardData
};
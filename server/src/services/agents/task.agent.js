

const Task = require("../../models/task.model");
const Reminder = require("../../models/reminder.model");

const scheduleAgent = async () => {

    const tasks = Task.getAllTasks();
    const reminders = Reminder.getAllReminders();

    return {
        success: true,
        reply: {
            tasks,
            reminders
        }
    };

};

module.exports = scheduleAgent;
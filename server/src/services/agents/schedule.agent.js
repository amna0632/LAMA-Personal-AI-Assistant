const Task = require("../../models/task.model");
const Reminder = require("../../models/reminder.model");

const { formatSchedule } = require("../../utils/responseFormatter");

const scheduleAgent = async () => {

    const tasks = Task.getAllTasks();

    const reminders = Reminder.getAllReminders();

    const reply = formatSchedule(tasks, reminders);

    return {

        success: true,

        reply

    };

};

module.exports = scheduleAgent;
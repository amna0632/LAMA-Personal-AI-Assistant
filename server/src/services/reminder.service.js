const Reminder = require("../models/reminder.model");

const createReminder = (data) => {

    const {
        title,
        message,
        reminderDate,
        reminderTime,
        repeatType
    } = data;

    return Reminder.createReminder(
        title,
        message,
        reminderDate,
        reminderTime,
        repeatType
    );
};

const getAllReminders = () => {
    return Reminder.getAllReminders();
};

const getReminderById = (id) => {
    return Reminder.getReminderById(id);
};

const deleteReminder = (id) => {
    return Reminder.deleteReminder(id);
};

const getPendingReminders = () => {
    return Reminder.getPendingReminders();
};

const completeReminder = (id) => {
    return Reminder.completeReminder(id);
};

module.exports = {
    createReminder,
    getAllReminders,
    getReminderById,
    deleteReminder,
    getPendingReminders,
    completeReminder
};

module.exports = {

    createReminder,
    getAllReminders,
    getReminderById,
    deleteReminder,
    getPendingReminders,
    completeReminder

};


const ReminderService = require("../services/reminder.service");

// Create Reminder
const addReminder = (req, res) => {

    const {
        title,
        reminderDate,
        reminderTime
    } = req.body;

    if (!title || !reminderDate || !reminderTime) {

        return res.status(400).json({
            success: false,
            message: "Title, reminderDate and reminderTime are required"
        });

    }

    const id = ReminderService.createReminder(req.body);

    res.status(201).json({
        success: true,
        message: "Reminder Created",
        reminderId: id
    });

};

// Get All
const getReminders = (req, res) => {

    const reminders = ReminderService.getAllReminders();

    res.json({
        success: true,
        data: reminders
    });

};

// Get By ID
const getReminder = (req, res) => {

    const reminder = ReminderService.getReminderById(req.params.id);

    if (!reminder) {

        return res.status(404).json({
            success: false,
            message: "Reminder not found"
        });

    }

    res.json({
        success: true,
        data: reminder
    });

};

// Delete
const removeReminder = (req, res) => {

    ReminderService.deleteReminder(req.params.id);

    res.json({
        success: true,
        message: "Reminder Deleted"
    });

};

module.exports = {
    addReminder,
    getReminders,
    getReminder,
    removeReminder
};
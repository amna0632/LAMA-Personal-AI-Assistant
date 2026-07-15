const ReminderService = require("../reminder.service");

const reminderAgent = (reminderData) => {

    const id = ReminderService.createReminder(reminderData);

    return `✅ Reminder Created Successfully (ID: ${id})`;

};

module.exports = reminderAgent;
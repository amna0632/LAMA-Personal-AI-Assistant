const formatSchedule = (tasks, reminders) => {

    let reply = "📅 Today's Schedule\n\n";

    // Tasks
    reply += "📝 Tasks\n";

    if (tasks.length === 0) {

        reply += "No tasks available.\n\n";

    } else {

        tasks.forEach((task, index) => {

            reply += `${index + 1}. ${task.title}\n`;

        });

        reply += "\n";
    }

    // Reminders
    reply += "⏰ Reminders\n";

    if (reminders.length === 0) {

        reply += "No reminders available.";

    } else {

        reminders.forEach((reminder, index) => {

            reply += `${index + 1}. ${reminder.title}\n`;

            reply += `   📅 ${reminder.reminderDate}\n`;

            reply += `   🕒 ${reminder.reminderTime}\n\n`;

        });

    }

    return reply;

};

module.exports = {
    formatSchedule
};
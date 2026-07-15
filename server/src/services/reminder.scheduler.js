const cron = require("node-cron");
const notifier = require("node-notifier");

const ReminderService = require("./reminder.service");

const startReminderScheduler = () => {

    console.log("✅ Reminder Scheduler Started");

    cron.schedule("* * * * *", () => {

        console.log("Checking reminders...");

        const reminders = ReminderService.getPendingReminders();

        const now = new Date();

        const today = now.toISOString().split("T")[0];

        let hours = now.getHours();
        let minutes = now.getMinutes();

        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        const currentTime =
            `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")} ${ampm}`;

        reminders.forEach((reminder) => {

            if (
                reminder.reminderDate === today &&
                reminder.reminderTime === currentTime
            ) {

                console.log("🔔 Reminder Triggered:", reminder.title);

                notifier.notify({
                    title: reminder.title,
                    message: reminder.message,
                    sound: true,
                    wait: false
                });

                ReminderService.completeReminder(reminder.id);

            }

        });

    });

};

module.exports = startReminderScheduler;
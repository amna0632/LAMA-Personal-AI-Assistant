const parseTask = require("../utils/taskParser");
const parseReminder = require("../utils/reminderParser");
const parseWeather = require("../utils/weatherParser");

const TaskService = require("./task.service");
const ReminderService = require("./reminder.service");

const executeCommand = require("../utils/commandExecutor");

const processAI = (message) => {

    // Browser Commands

    const lower = message.toLowerCase();

    if (lower.includes("chrome")) {

        return executeCommand("open chrome");

    }

    if (lower.includes("youtube")) {

        return executeCommand("open youtube");

    }

    if (lower.includes("chatgpt")) {

        return executeCommand("open chatgpt");

    }

    if (lower.includes("github")) {

        return executeCommand("open github");

    }

    if (lower.includes("linkedin")) {

        return executeCommand("open linkedin");

    }

    if (lower.includes("whatsapp")) {

        return executeCommand("open whatsapp");

    }

    if (lower.includes("fiverr")) {

        return executeCommand("open fiverr");

    }

    if (lower.includes("calculator")) {

        return executeCommand("open calculator");

    }

    if (lower.includes("vscode") || lower.includes("vs code")) {

        return executeCommand("open vscode");

    }

    // Reminder

    const reminder = parseReminder(message);

    if (reminder) {

        const id = ReminderService.createReminder(reminder);

        return `✅ Reminder Created (ID: ${id})`;

    }

    // Task

    const task = parseTask(message);

    if (task) {

        const id = TaskService.createTask(task);

        return `✅ Task Created (ID: ${id})`;

    }

    // Weather

    if (parseWeather(message)) {

        return "🌦 Weather feature is under development.";

    }

    return "🤖 Sorry, I couldn't understand your request.";

};

module.exports = {
    processAI
};
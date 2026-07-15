const detectIntent = require("../utils/intentDetector");
const extractEntity = require("../utils/entityExtractor");
const parseDate = require("../utils/dateParser");

const taskAgent = require("./agents/task.agent");
const reminderAgent = require("./agents/reminder.agent");
const browserAgent = require("./agents/browser.agent");
const noteAgent = require("./agents/note.agent");
const weatherAgent = require("./agents/weather.agent");
const scheduleAgent = require("./agents/schedule.agent");
const memoryAgent = require("./agents/memory.agent");
const automationAgent = require("./agents/automation.agent");

const systemAgent = require("./agents/system.agent");
const bluetoothAgent = require("./agents/bluetooth.agent");
const whatsappAgent = require("./agents/whatsapp.agent");

const aiService = async (message) => {

    console.log("AI Controller Hit");

    const intent = detectIntent(message);
    const entity = extractEntity(message);
    const date = parseDate(message);

    console.log("Intent :", intent);
    console.log("Entity :", entity);
    console.log("Date :", date);

     switch (intent) {

    case "browser":
        return await browserAgent(entity);

    case "task":
        return await taskAgent(message);

    case "reminder":
        return await reminderAgent(message, date);

    case "note":
        return await noteAgent(message);

    case "weather":
        return await weatherAgent(entity);

    case "schedule":
        return await scheduleAgent();

    case "memory":
        return await memoryAgent(message);

    case "automation":
        return await automationAgent(message);

    case "system":
        return await systemAgent();

    case "whatsapp":

    return await whatsappAgent(message);

    case "bluetooth":
        return await bluetoothAgent(message);

    default:
        return {
            success: false,
            reply: "Sorry, I couldn't understand."
        };
}

};

module.exports = aiService;
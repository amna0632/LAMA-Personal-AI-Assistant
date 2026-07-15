const executeCommand = require("../../utils/commandExecutor");

const automationAgent = async (message) => {

    const result = executeCommand(message);

    return {
        success: true,
        reply: result,
    };
};

module.exports = automationAgent;
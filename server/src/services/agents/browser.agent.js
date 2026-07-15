const executeCommand = require("../../utils/commandExecutor");

const browserAgent = async (entity) => {

    console.log("Browser Entity :", entity);

    const command = `open ${entity}`;

    console.log(command);

    const result = executeCommand(command);

    return {
        success: true,
        reply: result,
    };
};

module.exports = browserAgent;
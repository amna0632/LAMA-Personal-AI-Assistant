const executeCommand = require("../utils/commandExecutor");

const runCommand = (command) => {

    return executeCommand(command);

};

module.exports = {
    runCommand
};
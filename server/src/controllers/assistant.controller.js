const AssistantService = require("../services/assistant.service");

const execute = (req, res) => {

    const { command } = req.body;

    if (!command) {

        return res.status(400).json({
            success: false,
            message: "Command is required"
        });

    }

    const result = AssistantService.runCommand(command);

    res.json({
        success: true,
        message: result
    });

};

module.exports = {
    execute
};
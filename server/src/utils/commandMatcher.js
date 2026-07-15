const detectIntent = require("./intentDetector");

const extractEntity = require("./entityExtractor");

const matchCommand = (message) => {

    return {

        intent: detectIntent(message),

        entity: extractEntity(message)

    };

};

module.exports = matchCommand;
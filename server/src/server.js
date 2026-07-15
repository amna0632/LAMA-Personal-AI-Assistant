const app = require("./app");

require("./database/database");

const startReminderScheduler = require("./services/reminder.scheduler");

const config = require("./config/app.config");

const PORT = config.PORT;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

    startReminderScheduler();

});

console.log("===============================");
console.log(config.APP_NAME);
console.log("Version :", config.APP_VERSION);
console.log("Environment :", config.NODE_ENV);
console.log("===============================");
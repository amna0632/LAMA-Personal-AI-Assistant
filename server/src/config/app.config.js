require("dotenv").config();

module.exports = {

    PORT: process.env.PORT,

    NODE_ENV: process.env.NODE_ENV,

    APP_NAME: process.env.APP_NAME,

    APP_VERSION: process.env.APP_VERSION,

    DEFAULT_FOLDER: process.env.DEFAULT_FOLDER,

    DEFAULT_FILE: process.env.DEFAULT_FILE

};
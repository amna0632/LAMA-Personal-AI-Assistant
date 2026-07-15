const { exec } = require("child_process");

const bluetoothAgent = async () => {

    exec("start ms-settings:bluetooth", (error) => {

        if (error) {
            console.log(error);
        }

    });

    return {

        success: true,

        reply: "🔵 Bluetooth Settings Opened"

    };

};

module.exports = bluetoothAgent;
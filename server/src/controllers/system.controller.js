const os = require("os");

const getSystemInfo = (req, res) => {

    const totalMemory = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
    const freeMemory = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);

    res.json({

        success: true,

        system: {

            hostname: os.hostname(),

            platform: os.platform(),

            os: `${os.type()} ${os.release()}`,

            cpu: os.cpus()[0].model,

            totalMemory: `${totalMemory} GB`,

            freeMemory: `${freeMemory} GB`,

            uptime: `${Math.floor(os.uptime()/3600)} Hours`

        }

    });

};

module.exports = { getSystemInfo };
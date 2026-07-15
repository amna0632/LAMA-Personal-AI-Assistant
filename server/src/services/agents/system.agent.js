const os = require("os");

const systemAgent = async () => {

    const cpus = os.cpus();

    return {

        success: true,

        reply: "System Information",

        data: {

            hostname: os.hostname(),

            username: os.userInfo().username,

            platform: os.platform(),

            architecture: os.arch(),

            cpu: cpus[0].model,

            cpuCores: cpus.length,

            totalMemory: `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,

            freeMemory: `${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`,

            uptime: `${Math.floor(os.uptime() / 60)} Minutes`

        }

    };

};

module.exports = systemAgent;
const extractEntity = (text) => {

    const lower = text.toLowerCase();

    // Browser Apps
    const apps = [
        "youtube",
        "chrome",
        "github",
        "chatgpt",
        "linkedin",
        "whatsapp",
        "calculator",
        "vscode",
        "spotify",
        "folder",
        "file"
    ];

    for (const app of apps) {

        if (lower.includes(app)) {
            return app;
        }

    }

    // WhatsApp Message

    if (
        lower.includes("message") ||
        lower.includes("bhejo") ||
        lower.includes("send")
    ) {

        return text;

    }

    return text;

};

module.exports = extractEntity;
const parseCommand = (message) => {

    const text = message.toLowerCase();

    // ---------- Open Commands ----------

    if (
        text.includes("chrome")
    ) {

        return {

            intent: "OPEN",

            target: "chrome"

        };

    }

    if (
        text.includes("youtube")
    ) {

        return {

            intent: "OPEN",

            target: "youtube"

        };

    }

    if (
        text.includes("chatgpt")
    ) {

        return {

            intent: "OPEN",

            target: "chatgpt"

        };

    }

    if (
        text.includes("github")
    ) {

        return {

            intent: "OPEN",

            target: "github"

        };

    }

    if (
        text.includes("linkedin")
    ) {

        return {

            intent: "OPEN",

            target: "linkedin"

        };

    }

    if (
        text.includes("whatsapp")
    ) {

        return {

            intent: "OPEN",

            target: "whatsapp"

        };

    }

    if (
        text.includes("fiverr")
    ) {

        return {

            intent: "OPEN",

            target: "fiverr"

        };

    }

    if (
        text.includes("calculator")
    ) {

        return {

            intent: "OPEN",

            target: "calculator"

        };

    }

    if (
        text.includes("vscode")
        ||
        text.includes("vs code")
    ) {

        return {

            intent: "OPEN",

            target: "vscode"

        };

    }

    // ---------- Weather ----------

    if (
        text.includes("weather")
        ||
        text.includes("temperature")
    ) {

        return {

            intent: "WEATHER"

        };

    }

    return {

        intent: "UNKNOWN"

    };

};

module.exports = parseCommand;
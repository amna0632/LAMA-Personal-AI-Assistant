const parseWeather = (message) => {

    const text = message.toLowerCase();

    if (
        text.includes("weather") ||
        text.includes("temperature") ||
        text.includes("mosam") ||
        text.includes("mausam")
    ) {

        return true;

    }

    return false;

};

module.exports = parseWeather;
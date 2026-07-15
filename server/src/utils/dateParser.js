function formatDate(date) {
    return date.toISOString().split("T")[0];
}

function convertTo24Hour(hour, meridian) {

    hour = Number(hour);

    if (meridian === "pm" && hour !== 12) {
        hour += 12;
    }

    if (meridian === "am" && hour === 12) {
        hour = 0;
    }

    return hour;
}

function parseDate(message) {

    const text = message.toLowerCase();

    let date = new Date();

    // ------------------------
    // Today
    // ------------------------

    if (text.includes("today") || text.includes("aaj")) {

    }

    // ------------------------
    // Tomorrow
    // ------------------------

    else if (
        text.includes("tomorrow") ||
        text.includes("kal")
    ) {

        date.setDate(date.getDate() + 1);

    }

    // ------------------------
    // Time
    // ------------------------

    let reminderTime = "09:00 AM";

    const match = text.match(/(\d{1,2})\s*(am|pm)/);

    if (match) {

        const hour = Number(match[1]);

        const meridian = match[2];

        reminderTime =
            hour.toString().padStart(2, "0") +
            ":00 " +
            meridian.toUpperCase();

    }

    return {

        reminderDate: formatDate(date),

        reminderTime

    };

}

module.exports = parseDate;
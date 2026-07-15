const parseReminder = (message) => {

    const text = message.toLowerCase();

    if (
        !text.includes("yaad") &&
        !text.includes("remind") &&
        !text.includes("reminder")
    ) {

        return null;

    }

    let reminderDate = new Date();

    let reminderTime = "09:00";

    if (text.includes("tomorrow") || text.includes("kal")) {

        reminderDate.setDate(reminderDate.getDate() + 1);

    }

    return {

        title: message,

        message,

        reminderDate: reminderDate.toISOString().split("T")[0],

        reminderTime,

        repeatType: "none"

    };

};

module.exports = parseReminder;
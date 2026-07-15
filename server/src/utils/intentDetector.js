const detectIntent = (text) => {

    text = text.toLowerCase();

    // =============================
    // BLUETOOTH
    // =============================

    if (text.includes("bluetooth")) {
        return "bluetooth";
    }

    // =============================
    // SYSTEM
    // =============================

    if (
        text.includes("system info") ||
        text.includes("system") ||
        text.includes("computer info") ||
        text.includes("laptop info")
    ) {
        return "system";
    }

    // =============================
    // AUTOMATION
    // =============================

     if (
    text.includes("shutdown") ||
    text.includes("shut down") ||
    text.includes("turn off") ||
    text.includes("close laptop") ||
    text.includes("close computer") ||
    text.includes("restart") ||
    text.includes("reboot") ||
    text.includes("lock") ||
    text.includes("lock computer") ||
    text.includes("lock laptop") ||
    text.includes("sleep") ||
    text.includes("hibernate") ||
    text.includes("screenshot") ||
    text.includes("take screenshot") ||
    text.includes("capture screen") ||
    text.includes("volume") ||
    text.includes("increase volume") ||
    text.includes("decrease volume") ||
    text.includes("mute") ||
    text.includes("unmute")
) {
    return "automation";
}

    // =============================
    // MEMORY
    // =============================

    if (
        text.startsWith("remember") ||
        text.startsWith("what is") ||
        text.startsWith("when is")
    ) {
        return "memory";
    }

    // =============================
    // REMINDER
    // =============================

    if (
        text.includes("remind") ||
        text.includes("reminder") ||
        text.includes("yaad")
    ) {
        return "reminder";
    }

    // =============================
    // TASK
    // =============================

    if (
        text.includes("task") ||
        text.includes("todo") ||
        text.includes("karna hai") ||
        text.includes("study") ||
        text.includes("learn") ||
        text.includes("complete") ||
        text.includes("revise")
    ) {
        return "task";
    }

    // =============================
    // NOTES
    // =============================

    if (
        text.includes("note") ||
        text.includes("notes")
    ) {
        return "note";
    }

    // =============================
    // WEATHER
    // =============================

    if (
        text.includes("weather") ||
        text.includes("temperature")
    ) {
        return "weather";
    }

    // =============================
    // SCHEDULE
    // =============================

    if (
        text.includes("schedule") ||
        text.includes("today schedule") ||
        text.includes("aaj ka schedule keya hai") ||
        text.includes("mera schedule bateo")
    ) {
        return "schedule";
    }


        if (
    text.includes("send") ||
    text.includes("message") ||
    text.includes("msg") ||
    text.includes("text") ||
    text.includes("bhejo") ||
    text.includes("message bhejo") ||
    text.includes("ko message") ||
    text.includes("whatsapp") ||
    text.includes("whatsapp karo")
) {
    return "whatsapp";
}





    // =============================
    // BROWSER (Always Last)
    // =============================

    if (
        text.includes("open") ||
        text.includes("khol") ||
        text.includes("kholo")
    ) {
        return "browser";
    }

    return "unknown";
};

module.exports = detectIntent;
const { sendMessage } = require("../whatsapp.service");

const whatsappAgent = async (message) => {

    message = message
        .toLowerCase()
        .replace(/\bco\b/g, "ko")
        .replace(/\bcom\b/g, "ko")
        .replace(/\bkay\b/g, "ko")
        .replace(/\bbhajo\b/g, "bhejo")
        .replace(/\bbejo\b/g, "bhejo")
        .replace(/\bbhej do\b/g, "bhejo")
        .replace(/\s+/g, " ")
        .trim();

    console.log("Voice:", message);

    let contact = "";
    let text = "";

    // ko message bhejo
    if (message.includes(" ko message ")) {

        const parts = message.split(" ko message ");

        contact = parts[0].trim();

        text = parts[1]
            .replace(/^bhejo\s*/,"")
            .replace(/^bhajo\s*/,"")
            .replace(/^bejo\s*/,"")
            .trim();
    }

    // ko whatsapp karo
    else if (message.includes(" ko whatsapp karo ")) {

        const parts = message.split(" ko whatsapp karo ");

        contact = parts[0].trim();

        text = parts[1].trim();
    }

    // ko text karo
    else if (message.includes(" ko text karo ")) {

        const parts = message.split(" ko text karo ");

        contact = parts[0].trim();

        text = parts[1].trim();
    }

    // ko send
    else if (message.includes(" ko send ")) {

        const parts = message.split(" ko send ");

        contact = parts[0].trim();

        text = parts[1].trim();
    }

    console.log("Contact:", contact);
    console.log("Text:", text);

    if (!contact || !text) {

        return {
            success: false,
            reply: "Contact not found."
        };

    }

    return await sendMessage(contact, text);

};

module.exports = whatsappAgent;
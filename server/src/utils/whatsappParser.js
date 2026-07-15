const parser = (text) => {

    text = text.replace(/^send\s+/i, "").trim();

    const words = text.split(" ");

    const keywords = [
        "hello",
        "hi",
        "kal",
        "aaj",
        "meeting",
        "test",
        "assignment",
        "pdf",
        "please",
        "plz"
    ];

    let index = words.findIndex(word =>
        keywords.includes(word.toLowerCase())
    );

    if (index === -1) {
        index = 1;
    }

    return {
        contact: words.slice(0, index).join(" "),
        message: words.slice(index).join(" ")
    };
};

module.exports = parser;
const parseTask = (message) => {

    const text = message.toLowerCase();

    const keywords = [
        "task",
        "todo",
        "karna hai",
        "complete karna",
        "finish",
        "assignment",
        "lecture lena",
        "revise",
        "revision"
    ];

    const isTask = keywords.some(keyword => text.includes(keyword));

    if (!isTask) {

        return null;

    }

    return {

        title: message.trim(),

        description: "",

        status: "Pending"

    };

};

module.exports = parseTask;
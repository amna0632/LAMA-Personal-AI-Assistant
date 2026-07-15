const MemoryService = require("../memory.service");

const memoryAgent = async (message) => {

    const lower = message.toLowerCase();

    // Remember

    if (lower.startsWith("remember")) {

        const text = message.replace(/remember/i, "").trim();

        const parts = text.split(" is ");

        if (parts.length !== 2) {

            return {

                success: false,
                reply: "Use: Remember React Interview is tomorrow"

            };

        }

        MemoryService.remember(parts[0], parts[1]);

        return {

            success: true,
            reply: "✅ Memory Saved"

        };

    }

    // Recall

    if (

        lower.startsWith("what is") ||

        lower.startsWith("when is")

    ) {

        const question = message

            .replace(/what is/i, "")

            .replace(/when is/i, "")

            .trim();

        const result = MemoryService.recall(question);

        if (!result) {

            return {

                success: false,
                reply: "I don't remember."

            };

        }

        return {

            success: true,
            reply: result.answer

        };

    }

    return null;

};

module.exports = memoryAgent;
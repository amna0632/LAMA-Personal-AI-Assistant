const { error } = require("../utils/response");

const validateTask = (req, res, next) => {

    const {
        title,
        priority
    } = req.body;

    if (!title || title.trim() === "") {
        return error(res, "Title is required", 400);
    }

    const validPriorities = ["Low", "Medium", "High"];

    if (priority && !validPriorities.includes(priority)) {
        return error(res, "Priority must be Low, Medium or High", 400);
    }

    next();
};

module.exports = validateTask;
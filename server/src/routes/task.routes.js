const express = require("express");

const router = express.Router();

const {
    addTask,
    getTasks,
    getTask,
    editTask,
    removeTask,
    completeTask
} = require("../controllers/task.controller");

router.post("/", addTask);

router.get("/", getTasks);

router.get("/:id", getTask);

router.put("/:id", editTask);

router.delete("/:id", removeTask);

router.patch("/:id/status", completeTask);

module.exports = router;
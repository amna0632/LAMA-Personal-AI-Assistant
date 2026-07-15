const express = require("express");

const router = express.Router();

const {

    addReminder,
    getReminders,
    getReminder,
    removeReminder

} = require("../controllers/reminder.controller");

router.post("/", addReminder);

router.get("/", getReminders);

router.get("/:id", getReminder);

router.delete("/:id", removeReminder);

module.exports = router;
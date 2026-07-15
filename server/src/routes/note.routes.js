const express = require("express");

const router = express.Router();

const {
    addNote,
    getNotes,
    getNote,
    editNote,
    removeNote
} = require("../controllers/note.controller");

router.post("/", addNote);

router.get("/", getNotes);

router.get("/:id", getNote);

router.put("/:id", editNote);

router.delete("/:id", removeNote);

module.exports = router;
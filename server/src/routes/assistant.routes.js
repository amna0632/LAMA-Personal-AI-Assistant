const express = require("express");

const router = express.Router();

const { execute } = require("../controllers/assistant.controller");

router.post("/command", execute);

module.exports = router;
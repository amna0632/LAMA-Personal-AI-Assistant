const express = require("express");

const router = express.Router();

const { getSystemInfo } = require("../controllers/system.controller");

router.get("/", getSystemInfo);

module.exports = router;
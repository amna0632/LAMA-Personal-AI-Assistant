const express = require("express");

const router = express.Router();

router.post("/speech", (req, res) => {

    const { text } = req.body;

    res.json({

        success: true,
        transcript: text

    });

});

module.exports = router;
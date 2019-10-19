const express = require("express")
const profile = express.Router();

profile.get("/", (req, res) => {
    res.send("hellow")
})

module.exports = profile
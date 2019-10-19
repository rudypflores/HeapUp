const express = require("express")
const profile = express.Router();

profile.get("/", (req, res) => {
    res.send("hellow")
})

profile.post("/", (req, res) => {
    var data = req.body

    res.send(data)
})

profile.put("/", (req, res) => {
    const data = req.body
    res.send(data)
})

profile.delete("/:name", (req, res) => {
    const name = req.params.name
    
    //remove name
    res.status(200).send("remove successful")
})

profile.post("/:record", (req, res) => {
    const record = req.params.record
    if (record) {
        res.send(404).send("record ")
    }
})

module.exports = profile
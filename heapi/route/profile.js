const express = require("express")
const mongoose = require("mongoose")

const User = require("../mongoose/user")

const profile = express.Router();

profile.get("/", (req, res) => {
    res.send("hellow")
})

profile.post("/", async (req, res) => {
    var user = new User({
        name: req.body.name,
        gender: req.body.gender,
        current_age: req.body.age
    })
    await user.save()
    console.log(user)
    res.status(200).send("sdf");
})

profile.put("/", (req, res) => {
    const data = req.body
    res.send(data)
})

profile.delete("/:name", async (req, res) => {
    console.log(req.params.name)
    var du = await User.deleteOne({ name: req.params.name})
    console.log(du)
    res.send("remove successful")
})

profile.post("/:record", (req, res) => {
    const record = req.params.record
    if (record) {
        res.send(404).send("record ")
    }
})

module.exports = profile
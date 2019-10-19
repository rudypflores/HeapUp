const express = require("express")
const mongoose = require("mongoose")

const User = require("../mongoose/user")

const profile = express.Router();

profile.get("/:name", (req, res) => {
    
    //From Bo
    var json = {gender : 'male', age : 3, weight : 453, bench : 234, 
                squat : 789, deadlift : 987};

    var name = req.params.name
    var option = req.query.option
    console.log(option)

    var str = option.split(",")
    console.log(str)

    var j={};

    for(var i = 0; i < str.length; i++) {
        j[str[i]] = json[str[i]]
    }

    res.send(j)
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
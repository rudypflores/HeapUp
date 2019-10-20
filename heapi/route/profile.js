const express = require("express")
const mongoose = require("mongoose")

const User = require("../mongoose/user")

const profile = express.Router();

profile.get("/", async (req,res) => {
    res.send(await User.find({}))
})

profile.get("/:name", async(req, res) => {

    var n = req.params.name
        let get_profile = await User.findOne({ name : n }).lean();
        records = get_profile['records'];
        records.forEach(element => {
        console.log(element)
    });
    
    res.send(get_profile)
    

    
    // var option = req.query.option
    // if (option == undefined) {
    //     records.forEach(element => {
    //         console.log(element)
    //     });
    //     res.send(get_profile)
    // } else {
    //     console.log(option)
    //     var str = option.split(",")
    //     console.log(str)
    //     var j={};

    //     for(var i = 0; i < str.length; i++) {
    //         //j[str[i]] = records[str[i]]
    //         console.log(j[str[i]])
    //     }

    //     res.send(j)
    // }  
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
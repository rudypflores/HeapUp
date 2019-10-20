const express = require("express")
const mongoose = require("mongoose")

const User = require("../mongoose/user")

const profile = express.Router();

profile.get("/", async (req,res) => {
    res.send(await User.find({}))
})

profile.get("/:name", async(req, res) => {
    let get_profile
    try {
        get_profile = await User.findOne({ name : req.params.name }).lean();
        records = get_profile['records'];
    } catch (e) {
        return res.status(404).send({
            "errmsg": "No such name",
            "errcode": 140
        })
    }
    res.send(get_profile)
})

profile.post("/", async (req, res) => {
    var user = new User({
        name: req.body.name,
        gender: req.body.gender,
        current_age: req.body.age,
        height: {
            feet: req.body.height.foot,
            inches: req.body.height.inches
        }
    })
    try {
        await user.save()
    } catch (e) {
        return res.status(400).send({
            "errmsg": "error inserting data",
            "errcode": 101
        })
    }

    res.status(200).send("sdf");
})

profile.put("/", (req, res) => {

})

profile.post("/:name", async (req, res) => {
    const weight = req.body.weight
    const bench = req.body.bench
    const squat = req.body.squat
    const deadlift = req.body.deadlift
    const age = req.body.age
    if (!weight || !bench || !squat || !deadlift || !age) {
        console.log(weight)
        return res.status(404).send({
            "errmsg": "null data",
            "errcode": 404
        })
    }
    var record = {
        weight, bench, squat, deadlift, age
    }
    
    var getRecord = await User.findOne({name: req.params.name})

    try {
        await User.updateOne(
            {_id: getRecord.id},
            {$push: {records: record}}
        )
    } catch (e) {
        return res.status(404).send("error update the data")
    }    

    res.status(200).send("updated sucessfully")
})

profile.delete("/:name", async (req, res) => {
    var du = await User.deleteOne({ name: req.params.name })
    if(du.deletedCount == 0) {
        res.status(404).send("subject doesn't exist")
    }
    else {
        res.status(200).send("remove successful")
    }

})

module.exports = profile
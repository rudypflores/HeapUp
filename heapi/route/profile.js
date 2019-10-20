const express = require("express")
const mongoose = require("mongoose")

const User = require("../mongoose/user")

const profile = express.Router();

<<<<<<< HEAD
profile.get("/", async (req,res) => {
    res.send(await User.find({}))
})
=======
profile.get("/:name", (req, res) => {
>>>>>>> 4251bcbd5f0b452a7789d70ccbd8102dd5b7e3ad

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
        current_age: req.body.age,
        height: {
            feet: req.body.height.foot,
            inches: req.body.height.inches
        }
    })
    try {
        await user.save()
    } catch (e) {
        return res.status(400).send("error to insert data")
    }

    res.status(200).send("sdf");
})

profile.put("/", (req, res) => {
    const data = req.body
    res.send(data)
})

profile.post("/:name", async (req, res) => {
    const weight = req.body.weight
    const bench = req.body.bench
    const squat = req.body.squat
    const deadlift = req.body.deadlift
    const age = req.body.age
    if (!weight || !bench || !squat || !deadlift || !age) {
        console.log(weight)
        return res.status(404).send("record")
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
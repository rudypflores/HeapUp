const express = require("express")
const mongoose = require("mongoose")

const User = require("../mongoose/user")

const profile = express.Router();

///////////////////////////////
function isAuthenticated(req, res, next) {
    //check
    var json = {"username" : "an", "password" : "an123"}
    if (json.username === "an" && json.password === "an123") {
        return next();
    }
    /*if (req.user.authenticated) {
        return next();
    } */ else {
        res.send({"error": "Authen Failed"});
    }

}
//////////////////////////////

profile.get("/", isAuthenticated, async (req,res) => {
    res.send(await User.find({}))
})

profile.get("/:username", async(req, res) => {
    let get_profile
    try {
        get_profile = await User.findOne({ username : req.params.username }).lean();
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
        username: req.body.username,
        password: req.body.password,
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

    res.status(200).send("successfull creating user");
})

profile.put("/:option", async (req, res) => {
    const option = req.params.option
    const newData = req.body
    let userData
    
    try {
        userData = await User.findOne({name: newData.name})
        userData.records
    } catch (e) {
        return res.status(404).send({
            "errmsg": "the user doens't exist",
            "errcode": 404
        })
    }
    var updated
    if (option == "gender") {
        try {
            updated = await User.updateOne(
                {_id: userData.id},
                {$set: {gender: newData.gender}}
            )
        } catch (e) {
            return res.status(404).send({
                "errmsg": "unable to update",
                "errcode": 102
            })
        }
    } else if(option == "age") {
        try {
            updated = await User.updateOne(
                {_id: userData.id},
                {$set: {current_age: newData.age}}
            )
        } catch (e) {
            return res.status(404).send({
                "errmsg": "unable to update",
                "errcode": 102
            })
        }
    } else if (option == "height") {
        try {
            updated = await User.updateOne(
                {_id: userData.id},
                {$set: {height: newData.height}}
            )
        } catch (e) {
            return res.status(404).send({
                "errmsg": "unable to update",
                "errcode": 102
            })
        }
    }


    if (updated.nModified == 0) {
        return res.status(404).send({
            "errmsg": "changed nothing",
            "errcode": 101
        })
    }

    res.status(200).send("updated succesfully")
})

profile.post("/:username", async (req, res) => {
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
    
    var getRecord = await User.findOne({username: req.params.username})

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

profile.delete("/:username", async (req, res) => {
    var du = await User.deleteOne({ username: req.params.username })
    if(du.deletedCount == 0) {
        res.status(404).send("subject doesn't exist")
    }
    else {
        res.status(200).send("remove successful")
    }

})

module.exports = profile
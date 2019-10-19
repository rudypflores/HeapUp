const express = require("express")
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

module.exports = profile
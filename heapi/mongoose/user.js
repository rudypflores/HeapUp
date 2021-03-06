const mongoose = require("mongoose")

var profilesSchema = new mongoose.Schema({
    username: String,
    password: String,
    name:  String,
    gender: String,
    current_age: Number,
    height: {
        feet: Number,
        inches: Number
    },
    records : [{
        weight: Number,
        bench: Number,
        squat: Number,
        deadlift: Number,    
        date_entered: { type: Date, default: Date.now },
        age: Number
    }]
});

const User = mongoose.model("Profiles", profilesSchema)
module.exports = User 
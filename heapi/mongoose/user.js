const mongoose = require("mongoose")

var profilesSchema = new mongoose.Schema({
    name:  String,
    gender: String,
    current_age: Number,
    records : [{
        weight: Number,
        bench: Number,
        squat: Number,
        deadlift: Number,    
        date_entered: { type: Date, default: Date.now },
        age: Number
    }]
});

module.exports = profilesSchema
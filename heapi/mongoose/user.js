const mongoose = require('mongoose');    
mongoose.connect('mongodb+srv://avu1:Anvu23198@cluster0-oj2tn.gcp.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // console.log("true")
});

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
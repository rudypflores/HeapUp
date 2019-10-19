const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');    

const profile = require("./route/profile")
const app = express()
const PORT = 8080 

mongoose.connect('mongodb+srv://avu1:Anvu23198@cluster0-oj2tn.gcp.mongodb.net/test?retryWrites=true&w=majority', {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //`console.log("sdf")
});

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/api", profile)

app.listen(PORT, () => {
    console.log(`web running on port: ${PORT}`)
})
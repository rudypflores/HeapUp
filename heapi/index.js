const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');    

const profile = require("./route/profile")
const { mongodb } = require("./config/key")

const app = express()
const PORT = 8080 

mongoose.connect(mongodb, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/api", profile)

app.listen(PORT, () => {
    console.log(`web running on port: ${PORT}`)
})
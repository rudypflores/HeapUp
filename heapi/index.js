const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require('mongoose');    

const profile = require("./route/profile")
const { mongodb } = require("./config/key")

const app = express()
const PORT = process.env.PORT || 8080

mongoose.connect(mongodb, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
console.log(mongodb)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/api", profile)

if (process.env.NODE_ENV == "production") {
  //app.get('*', (req,res) => {
    //res.sendFile(path.join(__dirname, "..", "heap-up", "build", "index.html"))
  //})
  app.use(express.static(path.join(__dirname, "..", "heap-up", "build")))
}

app.listen(PORT, () => {
    console.log(`web running on port: ${PORT}`)
})

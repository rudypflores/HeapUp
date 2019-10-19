const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const profile = require("./route/profile")

const PORT = 8080 

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/api", profile)

app.listen(PORT, () => {
    console.log(`web running on port: ${PORT}`)
})
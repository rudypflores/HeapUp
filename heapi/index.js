const express = require("express")
const app = express()

const profile = require("./route/profile")

const PORT = 8080 

app.use("/api", profile)

app.listen(PORT, () => {
    console.log(`web running on port: ${PORT}`)
})
const express = require("express")
const User = require("../mongoose/user")

module.exports = async function (req, res, next) {
    const username = req.body.username
    let password
    try {
        var user = await User.findOne({username: username})
        password = user.password
    } catch (e) {
        return res.status(404).send("wrong username")
    }
    if (!username || !password) {
        return res.status(404).send("fail to authenticate 1")
    }
    else if (password == req.body.password) {
        return next()
    }
    
    res.status(404).send("failed to authenticate")

}
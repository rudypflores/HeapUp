const express = require("express")

module.exports = function isAuthenticated(req, res, next) {
    var json = {"username" : "an", "password" : "an123"}
    if (json.username === "an" && json.password === "an123") {
        return next();
    }
    else {
        res.send({"error": "Authen Failed"});
    }

}
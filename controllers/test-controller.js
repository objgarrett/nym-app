var express = require("express");
var router = express.Router();
const path = require("path");

//import the model (users.js) to use its database functions
var nym = require("../models/users.js");

//create all our routes and set up logic with those routes where required 
router.get("/test", function(req, res) {
    nym.all(function(data) {
        var hbsObject = {
            users: data
        };
        var id = req.param.id;
        console.log(hbsObject);
        res.render("test", id);
    });
});

//router.post goes here

//router.put goes here

//Export routes for server.js to use
module.exports = router;
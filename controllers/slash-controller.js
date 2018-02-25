var express = require("express");
var router = express.Router();
const path = require("path");

//import the model (users.js) to use its database functions
var nym = require("../models/users.js");

//create all our routes and set up logic with those routes where required 
//***************/
//OBG's NOTE: Not sure if the logic in router.get is what we want...was going off the "MVC Example" in week 14 - hopefully this at least gets you started
//***************/
router.get("/", function(req, res) {
    var loggedin = false;
    if (loggedin === true){
        console.log("home happened")
        res.redirect("/home");
    } else {
        console.log("login happened")
        res.redirect("/login");
    }
});

router.get("/login", function(req, res) {
    nym.all(function(data) {
        var hbsObject = {
            users: data
        };
        console.log(hbsObject);
        res.render("login", hbsObject);
    });
});

router.get("/test", function(req, res) {
    var test
    res.render("test", test);
})








module.exports = router;
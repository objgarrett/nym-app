var express = require("express");
var router = express.Router();
const path = require("path");

//import the model (users.js) to use its database functions
var nymUsers = require("../models/users.js");
var nymHouses = require("../models/households.js")
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
    nymUsers.all(function(data) {
        var hbsObject = {
            users: data
        };
        // console.log(hbsObject);
        res.render("login", hbsObject);
    });
});

router.get("/test", function(req, res) {
    nymUsers.all(function(data) {
        var hbsObject = {
            users: data
        };
        var id = req.param.id;
        // console.log(hbsObject);
        res.render("test", id);
    });
});

router.get("/newlogin", function(req, res) {
    console.log("newlogin ran")
    var id;
    res.redirect("/");
});


router.get('/api/userlogin/:id', function(req, res) {
    var id = req.params.id;
    var nothing
    console.log(id)
    var userExists = false;
    nymUsers.all(function(data){
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].facebook_id)
            if(data[i].facebook_id == id) {
                userExists = true;
            }
        }
        if (!userExists) {
            console.log("!userexists");
            res.send("create-user");
        } else {
            console.log("user does exist");
            res.send("test");
        }
    })
        // res.render('create-user', nothing);
})

router.get('/create-user', function(req, res){
    var id
    res.render('create-user', id);
})

router.post('/api/newuser/:id', function(req, res) {
    var newUser = req.body;
    console.log(newUser);
})

router.get('/api/allhouses', function(req, res){
    nymHouses.all(function(data) {
        var houses = {
            houses: data
        };
        // console.log(hbsObject);
        res.send(houses);
    });
})






module.exports = router;
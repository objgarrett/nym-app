var express = require("express");
var router = express.Router();
const path = require("path");

//import the model (users.js) to use its database functions
var nymUsers = require("../models/users.js");
var nymHouses = require("../models/households.js");
var nymRelation = require("../models/relationship.js");
var nymTasks = require("../models/taskmanager.js");

//create all our routes and set up logic with those routes where required 
//***************/
//OBG's NOTE: Not sure if the logic in router.get is what we want...was going off the "MVC Example" in week 14 - hopefully this at least gets you started
//***************/

//render blank page and redirect 
router.get("/", function(req, res){
    var nothing;
    res.render("slash", nothing);
})

//renders login page
router.get("/login", function(req, res) {
    nymUsers.all(function(data) {
        var hbsObject = {
            users: data
        };
        // console.log(hbsObject);
        res.render("login", hbsObject);
    });
});

//this is for testing routes and redirects. it should never be used in production
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

//not sure what this does...this doesn't look like it should work
router.get("/newlogin", function(req, res) {
    console.log("newlogin ran")
    var id;
    res.redirect("/");
});

//this is called to check if the user exists in our database. if they dont...it sends "create-user" in the data. if they do they go to tasks
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
            res.send("create-user");
        } else {
            res.send("tasks");
        }
    })
        // res.render('create-user', nothing);
})

//displays the create user page when called. I don't think this is being used anymore?
router.get('/create-user', function(req, res){
    var id
    res.render('create-user', id);
})

//this will run if the user creates a new account, pushes that to the user and relational db and the house db if a new house is created
router.post('/api/newuser/:id', function(req, res) {
    var data = req.body;
    var newUserCols = "firstname, lastname, birthday, email, phone, city, state, zip, facebook_id, created_at";
    var newUserVals = [data.firstName, data.lastName, data.birthdate, data.email, parseInt(data.phone), data.city, data.state, data.zip, data.facebook_id, data.created_at];
    //if new house is created, it will add the house to the house table, otherwise it does nothing with the house table
    if (data.houseType === "new") {
        var newHouseCols = "house_name, password";
        var newHouseVals = [data.house_name, data.password];
        nymHouses.create(newHouseCols, newHouseVals, function(res){
            console.log("house create: " + res)
        })
    }
    //creates new user in user table
    nymUsers.create(newUserCols, newUserVals, function(res){
        console.log("user create: " + res)
    })
    var newRelationCols = "house_name, facebook_id";
    var newRelationVals = [data.house_name, data.facebook_id];
    //creates new user/house relation in relation table
    nymRelation.create(newRelationCols, newRelationVals, function(res){
        console.log(res);
    })
    //just needed something to pass so that the page could redirect on success
    var joke = "how much wood could a woodchuck chuck?";
    res.send(joke);
})

//gets all houses from house table
router.get('/api/allhouses', function(req, res){
    nymHouses.all(function(data) {
        var houses = {
            houses: data
        };
        // console.log(hbsObject);
        res.send(houses);
    });
})
//displays tasks page
router.get("/tasks", function(req, res) {
    var Tasklist;
    nymTasks

    res.render("tasks", Tasklist);
});

//displays payment page
router.get("/payment", function(req, res) {
    var payment
    res.render("payment", payment);
});

//api call to get relation table
router.get("/api/relationtable", (req, res) => {
    nymRelation.all((data) => {
        res.send(data);
    })
})

//api call to get all tasks from a certain house name
router.get("/api/house/:house_name/tasks", (req, res) => {
    var house_name = req.params.house_name;
    console.log(house_name);
    
})

module.exports = router;
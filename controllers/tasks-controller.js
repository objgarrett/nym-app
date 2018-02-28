var express = require("express");
var router = express.Router();
const path = require("path");

//import the model (users.js) to use its database functions
var tasks = require("../models/taskmanager.js");

//create all our routes and set up logic with those routes where required 
//***************/
//OBG's NOTE: Not sure if the logic in router.get is what we want...was going off the "MVC Example" in week 14 - hopefully this at least gets you started
//***************/
// router.get("/tasks", function(req, res) {
//     tasks.all(function(data) {
//         var hbsObject = {
//             Tasklist: data
//         };
//         console.log(hbsObject);
//         res.render("tasks", hbsObject);
//     });
// });

//router.post goes here

//router.put goes here

//Export routes for server.js to use
module.exports = router;
var express = require("express");
var router = express.Router();
const path = require("path");

var payment = require("../models/paymentTracker.js");

//Export routes for server.js to use
module.exports = router;
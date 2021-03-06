// *** Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const PORT = process.env.PORT || 8080;

const app = express();
// Static directory
app.use(express.static("public"));

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
var login = require("./controllers/login-controller.js");
var slash = require("./controllers/slash-controller.js");
var test = require("./controllers/test-controller.js");

app.use('/', slash);
app.use('login', login);
app.use('test', test);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
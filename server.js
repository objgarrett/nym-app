// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

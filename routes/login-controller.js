const path = require("path");
const exphbs = require('express-handlebars');



module.exports = function(app) {
    const test = "";
    app.get("/login", function(req, res) {
        // res.send(path.join(__dirname, "../public/login.html"));
        res.render("login", test);
  })
}
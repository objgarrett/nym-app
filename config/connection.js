var mysql = require("mysql");
require('dotenv').config()

var connection = mysql.createConnection({
    port: 3306,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "s2lugpg6wdxixion"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
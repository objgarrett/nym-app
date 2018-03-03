var mysql = require("mysql");
require('dotenv').config()

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        // password: process.env.DB_PASS,
        // database: 'nym_db'
        // //database: 'NYM_DB'
        password: "password",
        database: 's2lugpg6wdxixion1'
    });
};    

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
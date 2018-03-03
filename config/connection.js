var mysql = require("mysql");
require('dotenv').config()

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: process.env.DB_PASS,
        // password: process.env.DB_PASS,
        database: 'NYM_DB'
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
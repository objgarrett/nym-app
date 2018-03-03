var mysql = require("mysql");
require('dotenv').config()

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
<<<<<<< HEAD
        // password: "MC95901720",
        password: process.env.DB_PASS,
        database: 'nym_db'
=======
        password: "password",
        database: 's2lugpg6wdxixion1'
>>>>>>> d817ba7f03c9ac812d0134b8fee995083bb9d12c
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
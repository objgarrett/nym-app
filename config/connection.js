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
        password: "password",
=======
        password: process.env.DB_PASS,
>>>>>>> 8d6cdccd76a642fb738fe693b401704224ca5b4b
        database: 'nym_db'
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
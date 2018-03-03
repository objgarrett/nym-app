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
        database: 's2lugpg6wdxixion1'
=======
        // password: process.env.DB_PASS,

        password: process.env.DB_PASS,
        database: 'nym_db'
>>>>>>> be769d0a197164f60df27602c69657c09a9400e5
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
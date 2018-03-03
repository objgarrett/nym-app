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
        // password: process.env.DB_PASS,
        // database: 'nym_db'
        // // //database: 'NYM_DB'
        password: "password",
        database: 's2lugpg6wdxixion1'
=======
        password: process.env.DB_PASS,
        database: 'nym_db'
        // password: "password",
        // database: 's2lugpg6wdxixion1'
>>>>>>> b4cbb63e0abd03959e832d456d1af036a4745d08
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
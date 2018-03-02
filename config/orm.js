var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    console.log("num length" + num.length);
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
}
  
function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

  
var orm = {
    all: function(tableInput, field, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }, 
    condition: function(tableInput, condition, cb) {
      var queryString = "SELECT * FROM " + tableInput;
      queryString += " WHERE ";
      queryString += condition;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      console.log(table);
      console.log(cols);
      console.log(vals);
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      console.log("vals.length: " + vals.length)
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    join: function(cols, tables, condition, cb) {
      var queryString = "SELECT * ";
      queryString += " FROM " + tables.join(", ");
      queryString += " WHERE "; 
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err
        }

        cb(result);
      })

    }, 
    delete: function(cols, table, condition, cb) {
      var queryString = "DELETE ";
      queryString += " FROM " + table;
      queryString += " WHERE ";
      queryString += condition;

      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err
        }
        cb(result);
      })
    }
};

  module.exports = orm;


  // var tables = ["users", "house", "Tasklist"];
  // const join = function(cols, tables, condtion, callback) {
  //   queryString += "FROM " + tables.join(", "); //users, homes, tasklist
  // } 
var orm = require("../config/orm.js");


var userRank = {
    all: function(cb) {
      orm.all("missedChore", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("missedChore", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("missedChore", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(cols, condition, cb) {
      orm.delete("missedChore", cols, condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller
  module.exports = userRank;
var orm = require("../config/orm.js");

var HouseholdStatus = {
  all: function(cb) {
    orm.all("HouseholdStatus", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("HouseholdStatus", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("HouseholdStatus", objColVals, condition, function(res) {
      cb(res);
    });
  },
  join: function(cols, tables, condition, cb) {
  	orm.join(cols, ["HouseholdStatus", "users", "house"], function(res) {
  		cb(res);
  	})
  }
};

// Export the database functions for the controller
module.exports = HouseholdStatus;
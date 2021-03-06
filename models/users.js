var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("users", function(res) {
      cb(res);
    });
  },
  conditional: function(condition, cb) {
    orm.condition("users", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("users", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(cols, condition, cb) {
    orm.delete(cols, "users", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = user;

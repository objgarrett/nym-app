var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("sessions", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("sessions", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = user;

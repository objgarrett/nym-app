var orm = require("../config/orm.js");  

var houseuserrelationship = {
	all: function(cb) {
    orm.all("houseuserrelationship", function(res) {
      cb(res);
    });
  },
  	create: function(cols, vals, cb) {
    orm.create("houseuserrelationship", cols, vals, function(res) {
      cb(res);
    });
  },
  	 update: function(objColVals, condition, cb) {
    orm.update("houseuserrelationship", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = houseuserrelationship;
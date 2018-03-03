// //household inventory - list of household items and an estimation of what's in/out of stock

var orm = require("../config/orm.js");  

var Inventory = {
	all: function(cb) {
    orm.all("Invetory", function(res) {
      cb(res);
    });
  },
   conditional: function(condition, cb) {
    orm.condition("users", condition, function(res) {
      cb(res);
    });
  },
  	create: function(cols, vals, cb) {
    orm.create("Inventory", cols, vals, function(res) {
      cb(res);
    });
  },
  // Leave grayed out update here, incase we quanitize the table
  // 	 update: function(objColVals, condition, cb) {
  //   orm.update("Inventory", objColVals, condition, function(res) {
  //     cb(res);
  //   });
  // }, 
  	join: function(cols, tables, condition, cb) {
  	orm.join(cols, ["Inventory", "users", "house"], condition, function(res) {
  		cb(res);
  	}); 
  },
  delete: function(cols, condition, cb) {
    orm.delete("Inventory", cols, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = Inventory;
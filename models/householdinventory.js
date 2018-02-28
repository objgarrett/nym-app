// //household inventory - list of household items and an estimation of what's in/out of stock

var orm = require("../config/orm.js");  

var Inventory = {
	all: function(cb) {
    orm.all("Invetory", function(res) {
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
  	join: function(cols, table1, table2, table3, condition, cb) {
  	orm.join(cols, "Inventory", "users", "house", condition, function(res) {
  		cb(res);
  	}); 
  }
};

module.exports = Inventory;
























// module.exports = function(sequelize, DataTypes) {
//     var Inventory = sequelize.define("Inventory", {
//         inventoryid: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },

//         inventorytext: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         // status: {
//         //     type: DataTypes.INTEGER,
//         //     allowNull: false
//         // }
//     });
//     return Inventory;
// };
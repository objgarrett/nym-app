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

// Export the database functions for the controller (catsController.js).
module.exports = HouseholdStatus;









//household status - example: Heat/AC is on or off, dishes are clean (y/n)
// module.exports = function(sequelize, DataTypes) {
//     var HouseholdStatus = sequelize.define("Householdstatus", {
//         householdid: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },

//         statustext: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         status: {
//             type: DataTypes.BOOLEAN,
//             allowNull: false
//         }
//     });
//     return HouseholdStatus;
// };
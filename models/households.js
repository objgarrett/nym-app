var orm = require("../config/orm.js");

var house = {
  //This might not be necessary to select all because, it's just the id and pwd
  all: function(cb) {
    orm.all("house", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("house", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("house", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = house;












// module.exports = function(sequelize, DataTypes) {
//     var Households = sequelize.define("Households", {
//         householdid: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },

//         userid: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },

//         create_at: {
//             type: DataTypes.DATE,
//             allowNull: false
//         }
//     });
//     return Users;
// };
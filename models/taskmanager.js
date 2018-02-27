// //for the task list - roommates can add, update, remove task items as well as set when it's due and who needs to complete the task
var orm = require("../config/orm.js");  

var Tasklist = {
	all: function(cb) {
    orm.all("Tasklist", function(res) {
      cb(res);
    });
  },
  	create: function(cols, vals, cb) {
    orm.create("users", cols, vals, function(res) {
      cb(res);
    });
  },

}


























//module.exports = function(sequelize, DataTypes) {
//     var Tasklist = sequelize.define("Tasklist", {
//         taskid: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
        
//         text: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 len: [1, 250]
//             }
//         },

//         complete: {
//             type: DataTypes.BOOLEAN,
//             defaultValue: false
//         },

//         dueby: {
//             type: DataTypes.DATE,
//             allowNull: false
//         },

//         userassigned: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },

//         userid: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         }
//     });
//     return Tasklist;
// };


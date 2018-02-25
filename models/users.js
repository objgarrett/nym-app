// //captures user sign up information
// module.exports = function(sequelize, DataTypes) {
//     var Users = sequelize.define("Tasklist", {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },

//         firstname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         lastname: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         birthday: {
//             type: DataTypes.DATE,
//             defaultValue: false
//         },

//         city: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         state: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },

//         zip: {
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
module.exports = function(sequelize, DataTypes) {
    var Households = sequelize.define("Households", {
        householdid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        userid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        create_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return Users;
};
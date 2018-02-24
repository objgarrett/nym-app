//household status - example: Heat/AC is on or off, dishes are clean (y/n)
module.exports = function(sequelize, DataTypes) {
    var HouseholdStatus = sequelize.define("Householdstatus", {
        householdid: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        statustext: {
            type: DataTypes.STRING,
            allowNull: false
        },

        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return HouseholdStatus;
};
//maybe need to add "due by" and user assignment 
//user assignment - how do we validate who the user is when they are assigned a task?
module.exports = function(sequelize, DataTypes) {
    var Tasklist = sequelize.define("Tasklist", {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 250]
            }
        },

        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },

        dueby: {
            type: DataTypes.DATE,
            allowNull: false
        },

        userassigned: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    return Tasklist;
};


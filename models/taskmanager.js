//maybe need to add "due by" and user assignment and the value/gold star/punishment
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
        }
    });
    return Tasklist;
};


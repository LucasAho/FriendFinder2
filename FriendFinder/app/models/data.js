module.exports = function (sequelize, DataTypes) {
    const Data = sequelize.define('Data', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        results: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Data;
};  
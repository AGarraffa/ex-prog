const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model {};

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezTableName: true,
        underscored: true,
        modelName: 'company',
    }
);

module.exports = Company;
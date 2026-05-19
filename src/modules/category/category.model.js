const { DataTypes } = require('sequelize');
const sequelize = require('..//../config/database');

const Category = sequelize.define(
    'Category',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:
        {
            type: varchar(50),
            allowNull: false
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'user', key: 'id'}
        },
    }
    ,{
      timestamps: true, 
      tableName: 'categories'
   }
);

module.exports = Category;

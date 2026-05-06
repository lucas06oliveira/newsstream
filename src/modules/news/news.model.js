const { DataTypes } = require('sequelize');
const sequelize = require('..//../config/database');

const News = sequelize.define(
    'News',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:
        {
            type: varchar(100),
            allowNull: false
        },
        description:
        {
            type: varchar(100),
        },
        message:
        {
            type: varchar(400),
            allowNull: false
        },
        category_id:
        {
            type: DataTypes.INTEGER,
            references: { model: 'category', key: 'id'}
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: { model: 'user', key: 'id'}
        },
        author:
        {
            type: DataTypes.INTEGER,
            references: { model: 'user', key: 'username'}
        }
    }
    ,{
      timestamps: true, 
      tableName: 'news'
   }
);
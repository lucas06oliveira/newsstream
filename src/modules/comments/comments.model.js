const { DataTypes } = require('sequelize');
const sequelize = require('..//../config/database');

const Comment = sequelize.define(
    'Comment',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text:
        {
            type: varchar(500),
            allowNull: false
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
      tableName: 'comments'
   }
);
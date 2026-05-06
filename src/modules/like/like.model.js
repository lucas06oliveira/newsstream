const { DataTypes } = require('sequelize');
const sequelize = require('..//../config/database');

const Like = sequelize.define(
    'Like',
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:
        {
            type: DataTypes.INTEGER,
            references: { model: 'user', key: 'id'}
        },
        news_id:
        {
            type: DataTypes.INTEGER,
            references: { model: 'news', key: 'id'}
        }
    }
    ,{
      timestamps: true, 
      tableName: 'likes'
   }
);
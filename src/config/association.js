const User = require('../model/user');
const Category = require('../model/category');
const Like = require('../model/like');
const Comment = require('../model/comment');
const News = require('../modules/news');

// Relacionamentos
Category.hasMany(News, { foreignKey: 'categoryId' });
News.belongsTo(Category, { foreignKey: 'categoryId' });



module.exports = { User, Book, Category, Like, Comment };
const User = require('../model/user');
const Category = require('../model/category');
const Like = require('../model/like');
const Comment = require('../model/comment');
const News = require('../modules/news');

// Relacionamentos
Category.hasMany(News, { foreignKey: 'category_id' });
News.belongsTo(Category, { foreignKey: 'category_id' });

News.hasMany(Like, { foreignKey: 'news_id' });
News.hasMany(Like, { foreignKey: 'news_id' });

News.hasMany(Like, { foreignKey: 'news_id' });
Like.belongsTo(News, { foreignKey: 'news_id' });

User.hasMany(News, { foreignKey: 'user_id' })
News.belongsTo(User, { foreignKey: 'user_id' });

User.hasMany(News, { foreignKey: 'username' })
News.belongsTo(User, { foreignKey: 'username' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongTo(User, { foreignKey: 'user_id' });

User.hasMany(Comment, { foreignKey: 'username' });
Comment.belongTo(User, { foreignKey: 'username' });

User.hasMany(Like, { foreignKey: 'user_id' });
Like.belongTo(User, { foreignKey: 'user_id' });

module.exports = { User, Book, Category, Like, Comment };
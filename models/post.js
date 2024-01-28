const Sequelize = require('sequelize');

const sequelize = require('../utils/database');


const Post = sequelize.define('Post',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    Postlink:{
        type:Sequelize.STRING,
        allowNull:false
    },
    PostDesc:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports = Post
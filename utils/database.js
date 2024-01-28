const Sequelize = require('sequelize');


const sequelize = new Sequelize('social-media','root','Mahakal@00',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;
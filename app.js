const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const Sequelize = require('./utils/database');

const postRoutes = require('./routes/post')

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));

app.use(postRoutes)

Sequelize
    .sync()
    .then(res => {
        console.log(res)
        app.listen(3000)
        console.log('table created successfull')
    })
    .catch(err => {
        console.log(err)
    })





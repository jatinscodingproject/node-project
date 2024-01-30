const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const Sequelize = require('./utils/database');

const postRoutes = require('./routes/post')

app.use(express.static('public'));

app.use(express.json())

app.use(postRoutes)

Sequelize
    .sync()
    .then(res => {
        app.listen(5000)
        console.log('table created successfull')
    })
    .catch(err => {
        console.log(err)
    })





const express = require('express');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const Sequelize = require('./utils/database');

const postRoutes = require('./routes/post');

app.use(cors())

app.use(express.static('public'));

app.use(express.urlencoded({extended:true}))

app.use(postRoutes);

Sequelize
    .sync()
    .then(res => {
        app.listen(5000)
        console.log('table created successfull')
    })
    .catch(err => {
        console.log(err)
    })





const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const Sequelize = require('./utils/database');

const postRoutes = require('./routes/post')

app.use(express.static('public'));

//app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json())

// app.post('/post',(req,res) => {
//     console.log(req)
// })

app.use(postRoutes)

Sequelize
    .sync({force:true})
    .then(res => {
        //console.log(res)
        app.listen(3000)
        console.log('table created successfull')
    })
    .catch(err => {
        console.log(err)
    })





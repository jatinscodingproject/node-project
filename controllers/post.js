const Post = require('../models/post')

exports.getPost = (req,res,next) => {
    res.status(200).sendFile('index.html',{
        root:'views'
    })
}

exports.postDetails = (req,res,next) =>{
    const postlink = req.body.imageUrl;
    const postdesc = req.body.description;
    Post.create({
       Postlink:postlink,
       PostDesc:postdesc
    })
    .then(res => {
        console.log('data added successful')
    })
    .catch(err => {
        console.log(err)
    })  
}
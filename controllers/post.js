const Post = require('../models/post');
const circularJSON = require('circular-json')

exports.getPost = (req, res, next) => {
    res.status(200).sendFile('index.html', {
        root: 'views'
    });
};

exports.postDetails = async (req, res, next) => {
    const postlink = req.body.imageUrl;
    const postdesc = req.body.description;
    console.log(req.body)
    try {
        const Postcreate = await Post.create({
            Postlink:postlink,
            PostDesc:postdesc
        });
        console.log(req.body.imageUrl)
        console.log('Data added successfully');
        res.redirect('/post');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getPostData = async (req, res, next) => {
    try {
        const data = await Post.findAll();
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

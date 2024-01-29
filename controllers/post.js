const Post = require('../models/post');

exports.getPost = (req, res, next) => {
    //console.log(req)
    res.status(200).sendFile('index.html', {
        root: 'views'
    });
};

exports.postDetails = (req, res, next) => {
    // const postlink = req.body.imageUrl;
    // const postdesc = req.body.description;
    console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<'+req)
    // Post.create({
    //     Postlink: postlink,
    //     PostDesc: postdesc
    // })
    // .then(result => {
    //     console.log('Data added successfully');
    //     res.redirect('/post');
    // })
    // .catch(err => {
    //     console.error(err);
    //     res.status(500).json({ error: 'Internal server error' });
    // });
};

exports.getPostData = async (req, res, next) => {
    try {
        const data = await Post.findAll();
        console.log(data)
        res.send(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
};

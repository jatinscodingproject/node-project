const express = require('express');

const router = express.Router()

const postController = require('../controllers/post');

router.get('/post',postController.getPost);

router.post('/post', (req, res, next) => {
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
})

router.get('/post/data',postController.getPostData)

module.exports = router;
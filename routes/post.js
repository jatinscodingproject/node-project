const express = require('express');

const router = express.Router()

const postController = require('../controllers/post');

router.get('/post',postController.getPost);

router.post('/post',postController.postDetails)

router.get('/post/data',postController.getPostData)

module.exports = router;
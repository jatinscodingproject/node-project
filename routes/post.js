const express = require('express');

const router = express('router');

const postController = require('../controllers/post');

router.get('/post',postController.getPost);

router.post('/post',postController.postDetails)

module.exports = router;
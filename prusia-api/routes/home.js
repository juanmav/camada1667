const express = require('express');
const Article = require('../models/article');
const commentsRouter = require('./commnets');

module.exports = function () {
    const router = express.Router();

    router.use('/:articleId/comments', commentsRouter());

    router.get('/', function (req, res) {
        Article
            .find({}, 'title')
            .populate('author')
            .then(articles => res.json(articles));
    });

    router.get('/:id', function (req, res) {
        Article
            .findById(req.params.id)
            .then(article => res.json(article));
    });

    return router;
};

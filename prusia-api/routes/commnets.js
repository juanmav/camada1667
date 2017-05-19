const express = require('express');
const Comment = require('../models/comment');


module.exports = function () {
    const router = express.Router({ mergeParams: true});

    router.get('/', function (req, res) {
        let articleId = req.params.articleId;

        Comment
            .find({ article : articleId})
            .populate('user')
            .then(comments => res.json(comments));
    });

    router.post('/', function (req, res) {
        let data = req.body;

        data.article = req.params.articleId;
        data.user = null; // Este dato lo sacamos del login.

        let comment = new Comment(data);

        comment
            .save()
            .then(result => res.json(result))
            .catch(err => res.json(err))
    });

    return router;
};

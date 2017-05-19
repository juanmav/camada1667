/**
 * Esta es la ruta de usuarios.
 *
 * */

const express = require('express');
const Tag = require('../models/tag');

module.exports = function () {
    const router = express.Router();

    router.get('/', function (req, res) {
        Tag.find({})
            .then(tags => {
                res.json(tags);
            })
    });

    router.post('/', function (req, res) {
        let tagData = req.body;
        let tag = new Tag(tagData);

        tag
            .save()
            .then(result => res.json(result));
    });

    return router;
};
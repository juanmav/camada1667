const express = require('express');
const Article = require('../models/article');
const User = require('../models/user');


module.exports = function () {
    const router = express.Router({ mergeParams : true});

    router.get('/', function (req, res) {
        Article
            .find({author : req.params.userId})
            .populate('author')
            .then(articles => res.json(articles));
    });

    router.get('/:id', function (req, res) {
        Article
            .findById(req.params.id)
            .populate('author')
            .then(article => res.json(article));
    });

    router.post('/', function (req, res) {
        console.log('creacion!');
        User
            .findById(req.params.userId)
            .then(user => {
                if (user){
                    let article = new Article(req.body);
                    article.author = user._id;
                    return article.save();
                } else {
                    throw { message : 'No hay usuario'};
                }
            })
            .then(article => {
                res.json(article)
            })
            .catch( err => {
                res.status(503).json(err);
            })
    });

    router.put('/:id', function (req, res) {
        let data = req.body;

        // Borro el id del articulo y el autor porque
        // No se pueden modificar, Regla Negocio.
        delete data._id;
        delete data.author;

        Article
            .findByIdAndUpdate(req.params.id, data)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    });

    router.delete('/:id', function (req, res) {
        Article
            .findByIdAndRemove(req.params.id)
            .then(result => res.json(result));

        // Opcion si esta ppublicado o no

        /*
        Article
            .findById(req.params.id)
            .then(article => {
                if (article.published){
                    res.status(503).({ message: 'No se puede borrar'});
                } else {
                    article.remove()
                        .then(result => {
                            res.json(result);
                        })
                }
            });
        */
    });

    return router;
};

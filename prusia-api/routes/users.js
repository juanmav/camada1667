/**
 * Esta es la ruta de usuarios.
 *
 * */

const express = require('express');
const User = require('../models/user');
const authorsArticlesRouter = require('./authorsarticles');

module.exports = function () {
    const router = express.Router();

    router.use('/:userId/articles', authorsArticlesRouter());

    router.get('/', function (req, res) {
        User.find({})
            .then(users => {
                res.json(users);
            })
    });

    router.get('/:id', function (req, res) {
        let id = req.params.id;

        User.findById(id)
            .then(user => res.json(user));

    });

    router.post('/', function (req, res) {
        let userData = req.body;
        console.log('La Data del usuario!: ');
        console.log(userData);

        let user = new User(userData);

        user
            .save()
            .then(result => res.json(result));

        console.log('Se genero el usuario: ' + user.fullname());

    });

    router.put('/:id', function (req, res) {
        let userData = req.body;
        let id = req.params.id;

        User.findByIdAndUpdate(id, userData)
            .then(result => res.json(result));
    });

    /*
    // Decidimos que los usarios no se borran
    // Porque deberiamos borrar sus articulos
    // y/o comentarios.

    router.delete('/:id', function(req, res){
        let id = req.params.id;

        User
            .findByIdAndRemove(id)
            .then(result => res.json(result));
    });*/

    return router;
};
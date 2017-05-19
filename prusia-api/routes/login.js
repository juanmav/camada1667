const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = function () {
    const router = express.Router();


    router.post('/', function (req, res) {
        let data = req.body;

        User
            .find({ username: data.username })
            .then(users => {
                let user = users[0];

                console.log(user);

                if (user && (user.password == data.password)){
                    console.log('Login correcto!');
                    delete user.password;

                    let token = jwt.sign(user, 'MySecretoOculto');

                    res.status(200).json(token);

                } else {
                    res.status(401).json({ message : 'Credenciales Incorrectas'})
                }
            })
            .catch(err => res.status(503).json(err));
    });

    return router;
};

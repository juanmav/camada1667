const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const userRouter = require('./routes/users');
const tagRouter = require('./routes/tags');
const homeRouter = require('./routes/home');
const loginRouter = require('./routes/login');

const authValidator = require('./helpers/authValidator');

// Configuracion Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

// Inicializo la coneccion a la DB
mongoose.connect('mongodb://localhost:27017/camada1667');

 
// Configuracion de rutas
app.use('/users', userRouter());
app.use('/tags', tagRouter());
app.use('/home', homeRouter());
app.use('/login', loginRouter());

app.listen(8000);
console.log('Mi servidor esta levantado en 8000');
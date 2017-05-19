const mongoose = require('mongoose');

// Defino os datos que va llevar mi modelo.
let UserSchema = mongoose.Schema({
    name: String,
    dni: Number,
    lastname: String,
    nationality: String,
    isAuthor: Boolean,
    username: String,
    password: String,
    isAdmin: Boolean
});

// Agrego Metodos al schema
UserSchema.methods.fullname = function(){
    return this.name + ' ' + this.lastname;
};

User = mongoose.model('User', UserSchema);

module.exports = User;

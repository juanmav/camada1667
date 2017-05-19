const expressjwt = require('express-jwt');

module.exports = expressjwt({
    secret: 'MySecretoOculto',
    getToken: function(req) {
        if (req.headers && req.headers['x-access-token']) {
            return req.headers['x-access-token'];
        }
        return null;
    }
});

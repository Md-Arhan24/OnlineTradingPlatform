require('dotenv').config();
const jsonwebtoken = require('jsonwebtoken');

module.exports.createSecretToken = (id) => {
    return jsonwebtoken.sign({id},process.env.TOKEN_KEY,{
        expiresIn:3 * 24 * 60 * 60,
    });
};
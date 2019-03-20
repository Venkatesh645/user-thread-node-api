const expressJwt = require('express-jwt');
const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET =>', JWT_SECRET);

function jwt() {
    return expressJwt({ secret: JWT_SECRET }).unless({
        path: [
            '/api/signin',
            '/api/register',
            '/api',
            '/',
        ]
    });
}
module.exports = jwt;
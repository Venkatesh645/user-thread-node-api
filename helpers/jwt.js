const expressJwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const db = require('./db');
const User = db.User;
const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET =>', JWT_SECRET);

function jwt() {
  return expressJwt({
    secret: JWT_SECRET,
    credentialsRequired: false,
    getToken
  }).unless({
    path: [
      '/api/signin',
      '/api/register',
      '/api',
      '/',
    ]
  });
}

function getToken(req) {
  const { authorization } = req.headers;
  if (authorization) {
    return authorization;
  }else{
    throw new Error('authorization not found in headers!!')
  }
}
module.exports = jwt;
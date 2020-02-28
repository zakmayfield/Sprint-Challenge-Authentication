const db = require('../database/dbConfig.js');

module.exports = {
  find,
  addUser
}

function find() {
  return db('users');
}

function addUser(user) {
  return db('users')
    .insert(user, 'id')
}
const db = require('../database/dbConfig.js');

module.exports = {
  find,
  findBy,
  addUser
}

function find() {
  return db('users');
}

function findBy(filter){
  return db('users')
    .select('id', 'username', 'password')
    .where(filter);
}

function addUser(user) {
  return db('users')
    .insert(user, 'id')
}
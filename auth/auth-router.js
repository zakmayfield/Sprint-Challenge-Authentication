const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/secrets.js');

const Users = require('../api/model.js');

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.addUser(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(({ name, message, stack }) => {
      res.status(500).json({ name, message, stack })
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;

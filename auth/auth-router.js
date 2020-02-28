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
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome, ${user.username}!`,
          token
        })
      } else {
        res.status(401).json({ error: "Username or password is incorrect" })
      }
    })
});

function generateToken(user) {
  const payload = {
    username: user.username,
  }

  const options = {
    expiresIn: '1h'
  }

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;

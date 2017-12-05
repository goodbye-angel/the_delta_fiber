// setup
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

//models
const User = require('../models/users.js');

// ROUTES

// new
router.get('/login', (req, res) => {
  res.render('sessions/new.ejs');
});

// create
router.post('/login', async (req, res) => {
  const foundUser = await User.findOne({ username: req.body.username });
  if (req.body.password == foundUser.password) {
    req.session.currentuser = foundUser;
    res.redirect('/');
  } else {
    res.send('Wrong username or password.'); //replace with view
  };
});

module.exports = router;

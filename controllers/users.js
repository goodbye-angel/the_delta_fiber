// setup
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// models
const User = require('../models/users.js');

// ROUTES ------------------------------------

// encrypt password
router.post('/register', async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
  await User.create(req.body);
  res.redirect('/');
});

// new
router.get('/register', (req, res) => {
  res.render('users/new.ejs');
});

// create
router.post('/register', async (req, res) => {
  await User.create(req.body);
  res.redirect('/');
});

module.exports = router;

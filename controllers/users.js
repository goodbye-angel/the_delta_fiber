// setup
const express = require('express');
const router = express.Router();

// models
const User = require('../models/users.js');

// ROUTES ------------------------------------

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

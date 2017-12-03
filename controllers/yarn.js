// setup
const express = require('express');
const router = express.Router();

// models
const Yarn = require('../models/yarn.js');

// ROUTES ------------------------------------------

// index
router.get('/', async (req, res) => {
  const allYarn = await Yarn.find();
  res.render('yarn/index.ejs', { allYarn });
});

// show
router.get('/:id', async (req, res) => {
  const oneYarn = await Yarn.findById(req.params.id);
  res.render('show.ejs', { oneYarn });
});

// create
router.post('/new', async (req, res) => {
  await Yarn.create(req.body);
  res.redirect('/yarn');
});

// create form
router.get('/new', async (req, res) => {
  await res.render('new.ejs');
});

// edit
router.put('/:id', async (req, res) => {
  await Yarn.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/yarn');
});

// edit form
router.get('/:id/edit', async (req, res) => {
  const editYarn = await Yarn.findById(req.params.id);
  res.render('edit.ejs', { editYarn });
});

module.exports = router;

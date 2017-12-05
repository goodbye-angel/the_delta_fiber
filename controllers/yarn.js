// setup
const express = require('express');
const router = express.Router();

// models
const Yarn = require('../models/yarn.js');

// ROUTES ------------------------------------------

// index
router.get('/', async (req, res) => {
  const allYarn = await Yarn.find();
  res.render('yarn/index.ejs', { allYarn, currentUser: req.session.currentuser });
});

// new
router.get('/new', (req, res) => {
  res.render('yarn/new.ejs');
});

// create
router.post('/', async (req, res) => {
  await Yarn.create(req.body);
  res.redirect('/yarn');
});

// read
router.get('/:id', async (req, res) => {
  const oneYarn = await Yarn.findById(req.params.id);
  res.render('yarn/show.ejs', { oneYarn });
});

// update
router.put('/:id', async (req, res) => {
  await Yarn.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/yarn');
});

// edit
router.get('/:id/edit', async (req, res) => {
  const editYarn = await Yarn.findById(req.params.id);
  res.render('yarn/edit.ejs', { editYarn });
});

// delete
router.delete('/:id', async (req, res) => {
  await Yarn.findByIdAndRemove(req.params.id);
  res.redirect('/yarn');
});

module.exports = router;

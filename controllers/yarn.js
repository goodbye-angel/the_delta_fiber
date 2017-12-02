// setup
const express = require('express');
const router = express.Router();

// models
const Yarn = require('../models/yarn.js');

// ROUTES ------------------------------------------

// index
router.get('/', async (req, res) => {
  await res.send('the delta fiber index');
});

// show
router.get('/:id', async (req, res) => {
  await res.send('yarn show page');
});

// create
router.get('/new', async (req, res) => {
  await res.send('enter new yarn');
});

// edit
router.get('/:id/edit', async (req, res) => {
  await res.send('edit yarn');
});

module.exports = router;

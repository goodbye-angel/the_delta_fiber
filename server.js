// setup
const express = require('express');
const mongoose = require('mongoose');
require('pretty-error').start();
const app = express();
mongoose.Promise = global.Promise;

const PORT = 3000;

// database
const mongoURI = 'mongodb://localhost:27017/the_delta_fiber'
mongoose.connect(mongoURI, { useMongoClient: true });

// enable static assets
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// enable req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// enable delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// controllers
const YarnController = require('./controllers/yarn.js');
app.use('/yarn', YarnController);

// listen
app.listen(PORT, () => {
  console.log('Ready to launch from shuttle bay 2. Listening on subspace frequency', PORT);
});

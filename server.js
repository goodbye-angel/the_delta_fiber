// setup
const express = require('express');
const mongoose = require('mongoose');
require('pretty-error').start();
const app = express();
mongoose.Promise = global.Promise;

const PORT = 3000;

// enable req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// listen
app.listen(PORT, () => {
  console.log('Ready to launch from shuttle bay 2. Listening on subspace frequency', PORT);
});

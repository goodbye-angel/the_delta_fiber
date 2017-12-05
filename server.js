// setup
const express = require('express');
const mongoose = require('mongoose');
require('pretty-error').start();
const app = express();
const session = require('express-session');
mongoose.Promise = global.Promise;

const PORT = process.env.PORT || 3000;

// database
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/the_delta_fiber'
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

// enable sessions
app.use(session({
  secret: "therearecatsandthecatsarefluffy", //?????
  resave: false, //?????
  saveUninitialized: false //?????
}));

// controllers
const YarnController = require('./controllers/yarn.js');
app.use('/yarn', YarnController);

const UsersController = require('./controllers/users.js');
app.use('/users', UsersController);

const SessionsController = require('./controllers/sessions.js');
app.use('/sessions', SessionsController);

// root route
app.get('/', (req, res) => {
  res.redirect('/yarn');
});

// listen
app.listen(PORT, () => {
  console.log('Ready to launch from shuttle bay 2. Listening on subspace frequency', PORT);
});

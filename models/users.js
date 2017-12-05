const mongoose = require('mongoose');

// schema for users
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

module.exports = mongoose.model('User', userSchema);

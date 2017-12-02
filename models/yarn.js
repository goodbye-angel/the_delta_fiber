const mongoose = require('mongoose');

// schema for yarn
const yarnSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  name: String,
  fiber: String,
  color: String,
  weight: String,
  length_per_skein: Number,
  skein_qty: { type: Number, required: true },
  dye_lot: String,
  img: String,
  notes: String
});

module.exports = mongoose.model('Yarn', yarnSchema);

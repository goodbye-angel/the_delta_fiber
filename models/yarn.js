const mongoose = require('mongoose');

// schema for yarn
const yarnSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  fiber: String,
  color: String,
  yarn_weight: String,
  skein_weight: { type: Number, min: 1 },
  length_per_skein: { type: Number, min: 1 },
  skein_qty: { type: Number, required: true, min: 0 },
  dye_lot: String,
  img: String,
  notes: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Yarn', yarnSchema);

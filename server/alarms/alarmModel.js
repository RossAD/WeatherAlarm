var mongoose = require('mongoose');

var AlarmSchema = new mongoose.Schema({
  label: String,
  time: Number,
  date: Date,
  zip: Number,
  inOut: Boolean
});

module.exports = mongoose.model('alarm', AlarmSchema);
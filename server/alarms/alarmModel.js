var mongoose = require('mongoose');

var AlarmSchema = new mongoose.Schema({
  label: String,
  time: String,
  date: Date,
  inOut: Boolean
});

module.exports = mongoose.model('alarm', AlarmSchema);
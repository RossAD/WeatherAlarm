var mongoose = require('mongoose');

var alarmSchema = new mongoose.Schema({
  label: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: Date,
  },
  inOut: {
    type: Boolean,
  }
});


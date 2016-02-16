var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  }
});
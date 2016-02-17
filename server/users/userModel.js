var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
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

module.export = mongoose.model('user', UserSchema);
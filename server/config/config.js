var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db');
var db = mongoose.connection;

// var AlarmSchema = new mongoose.Schema({
//   label:String,
//   time: String,
//   date: Date,
//   inOut: Boolean,
// });

// module.exports = mongoose.model('alarm', AlarmSchema);

exports.mongoose = mongoose;
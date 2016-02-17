var alarmController = require('../alarms/alarmController.js');
var express = require('express');
var app = express.Router();

console.log('Inside router');
module.exports = function (app, express) {
  app.post('/alarms/', alarmController.createAlarm);
  app.get('/alarms/', alarmController.getAlarm);
  // app.get('/', console.log("Success request!"));
  app.get('/', function(req, res) {
    console.log('server request', req.body);
    res.json({ message: 'hooray! welcome to our api!'});   
});
// app.use('/api', app);
};
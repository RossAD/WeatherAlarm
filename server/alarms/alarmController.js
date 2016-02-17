var Alarm = require('./alarmModel.js');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
// var Promise = require('bluebrid');
console.log('Inside AlarmController');
// var findAlarm = Promise.promisify(Alarm.findOne, Alarm);
// var findAllAlarms = Promise.promisify(Alarm.find, Alarm);
// var addAlarm = Promise.promisify(Alarm.create, Alarm);

exports.createAlarm = function(req, res, next){
  console.log('Inside Create Alarm', req.body);
  var newAlarm = new Alarm({
    label:req.body.label,
    time:req.body.time,
    date:req.body.date,
    inOut:req.body.inOut
  });
  Alarm.create(newAlarm, function(err, data){
    if(err){
      console.log('You got an Error: ', err);
    } else {
      res.status(202).json(data); 
    }

  });
};

exports.getAlarm = function(req, res, next){
  console.log('Get alarm on server: ', req.body);
  Alarm.find(function(err, alarms){
    if(err){
      console.log('You recieved an Error:', err);
    } else {
      // res.send(200, alarms);
      res.status(200).send(alarms);
    }
  });
};
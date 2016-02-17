angular.module('WeatherAlarm.services', [])
.factory('Events', function($http){
  // Get all scheduled events
  console.log('Inside Events');
  var getAll = function(){
    return $http({
      method: 'GET',
      url: '/alarms/',
    })
    .then(function(res){
      return res.data;
    });
  };

  var getOne = function(event){
    return $http({
      method: 'GET',
      url: '/alarms/'
    })
    .then(function(res){
      console.log('Get One res:', res);
      
    });
  };

  var newAlarm = function(alarm){
    console.log('NewAlarm : ', alarm);
    return $http({
      method: 'POST',
      url: '/alarms/',
      data: alarm
    })
    .then(function(res){
      console.log('New Alarm res:', res);
      
    });
  };

  // Weather Info pull
  var wx = function(zip){
    var request = '/api/70ba34089d4744a1/conditions/q/' + zip + '.json';
    return $http({
      method: 'GET',
      url: 'http://api.wunderground.com' + request
    })
    .then(function successCallback(res) {
      
      }, function errorCallback(res) {
        // called asynchronously if an error occurs
        console.log('Your weather call had an error', res);
      });
  };

  return {
    getAll:getAll,
    getOne:getOne,
    newAlarm:newAlarm
  };

});
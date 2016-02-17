angular.module('WeatherAlarm.services', [])
.factory('Events', function($http){
  // Get all scheduled events
  console.log('Inside Events');
  var getAll = function(){
    console
    return  $http({
      method: 'GET',
      url: '/alarms/'
    })
    .then(function(res){
      console.log('GetAll res:', res);
    });
  };

  var getOne = function(event){
    return $http({
      method: 'GET',
      url: '/alarms/'
    })
    .then(function(res){
      console.log('GetAll res:', res);
      
    });
  };

  var newAlarm = function(alarm){
    return $http({
      method: 'POST',
      url: '/alarms/',
      data: alarm
    })
    .then(function(res){
      console.log('GetAll res:', res);
      
    });
  };

  return {
    getAll:getAll,
    getOne:getOne,
    newAlarm:newAlarm
  };

});
angular.module('WeatherAlarm.services', [])
.factory('Events', function($http){
  // Get all scheduled events
  var getAll = function(){
    return  $http({
      method: 'GET',
      url: ''
    })
    .then();
  };

  var getOne = function(event){
    return $http({
      method: 'GET',
      url: ''
    })
    .then();
  };

});
angular.module('alarms.entry', [])
.controller('AlarmEntryController', function ($scope, $window, $location, Events, $route) {
  // Your code here
  $scope.data = {};
  $scope.addAlarm = function () {
  console.log('Newly created Alarm', newAlarm);
    var newAlarm = {
      label:$scope.addLabel,
      time:$scope.addTime,
      date:$scope.addDate,
      zip:$scope.addZip,
      inOut:$scope.outside
    };
    Events.newAlarm(newAlarm);
  };

});
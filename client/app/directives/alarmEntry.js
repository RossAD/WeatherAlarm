angular.module('alarms.entry', [])
.controller('AlarmEntryController', function ($scope, $window, $location, Events, $route) {
  // Your code here
  $scope.data = {};
  var newAlarm = {
    label:$scope.addLabel,
    time:$scope.addTime,
    date:$scope.addDate,
    inOut:$scope.outside
  };
  $scope.addAlarm = function () {
    Events.newAlarm(newAlarm);
  };

});
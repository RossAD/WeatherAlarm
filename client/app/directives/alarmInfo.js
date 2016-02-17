angular.module('alarms.list', [])

.controller('AlarmListController', function ($scope, $window, $location, Events, $route) {
  // Your code here
  $scope.data = {};

  Events.getAll()
    .then(function (data) {
      console.log('Inside AlarmsController: ', data);
      $scope.data.alarms = data;
    });
  // $scope.linkFresh = function(){
  //   $window.location.reload();
  // };
  // $scope.redirectUrl = function(url){
  //   $window.open(url, '__blank');
  // };
});
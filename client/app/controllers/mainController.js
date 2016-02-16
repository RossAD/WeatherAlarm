app.controller('AlarmController', ['$scope', function($scope){
  // Test Alarm info
  $scope.alarms = [
    $scope.alarm1 = {
      title : 'Test Alarm 1',
      time : '05:30pm',
      date : '02-17-2016',
      outdoor : true
    },
    $scope.alarm2 = {
      title : 'Test Alarm 2',
      time : '05:30pm',
      date : '02-17-2016',
      outdoor : true
    },
    $scope.alarm3 = {
      title : 'Test Alarm 3',
      time : '05:30pm',
      date : '02-17-2016',
      outdoor : true
    },
    $scope.alarm4 = {
      title : 'Test Alarm 4',
      time : '05:30pm',
      date : '02-17-2016',
      outdoor : true
    }
  ];
}]);
app.directive('alarmInfo', [function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      info:'='
    },
    // restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'app/directives/alarmInfo.html',
   
  };
}]);
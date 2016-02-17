var app = angular.module('WeatherAlarm',[
  'ngRoute',
  'alarms.entry',
  'alarms.list',
  'WeatherAlarm.services',

])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/alarm', {
        templateUrl: 'app/directives/alarmEntry.html',
        controller: 'AlarmEntryController'
      })
      .when('/alarms', {
        templateUrl: 'app/directives/alarmInfo.html',
        controller: 'AlarmListController'
      });
      // Your code here

      // We add our $httpInterceptor into the array
      // of interceptors. Think of it like middleware for your ajax calls
    });
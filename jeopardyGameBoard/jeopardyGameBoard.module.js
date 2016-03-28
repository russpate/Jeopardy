var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/jeopardyGameBoard',{
        templateUrl: 'templates/index.html',
        controller: 'HomeController'
      })
  })

var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'jeopardyGameBoard/templates/index.html',
        controller: 'HomeController'
      })
  })

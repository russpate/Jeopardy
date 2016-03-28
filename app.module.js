var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyApp',[
    'ngRoute',
    'jeopardyGameBoard'])
  .config(function($routeProvider){
    $routeProvider
      .when('/404',{
        template: '<h1>404</h1>',
        controller: 'HomeController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./jeopardyGameBoard');

var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyApp',[
    'ngRoute',
    'jeopardyGameBoard'])
  .config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: '/jeopardyGameBoard/templates/index.html',
        controller: 'HomeController'
      })
      .when('/404',{
        template: '<h1>404, This Page Cannot Be Found</h1>',
        controller: 'HomeController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./jeopardyGameBoard');

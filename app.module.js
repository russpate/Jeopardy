var angular = require('angular');
var angularRoute = require('angular-route');

angular
  .module('jeopardyApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/',{
        templateUrl: 'templates/index.html',
        controller: 'HomeController'
      })
      .when('/404',{
        templateUrl: 'templates/404.html',
        controller: 'HomeController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })

  require('./controllers/home.controller');
  require('./services/jeopardyApp.service');
  require('./directives/tempDirective');

angular
  .module('jeopardyApp')
  .controller('HomeController', HomeCtrl)

  HomeCtrl.$inject = ['$rootScope', '$scope', 'jeopardyAppService']
  function HomeCtrl($rootScope, $scope, jeopardyAppService){
    var vm = this
    $rootScope.score=0
    jeopardyAppService.getData()
      .then(function(data){
        vm.categories = data;
      })
    }

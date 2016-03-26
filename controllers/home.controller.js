angular
  .module('jeopardyApp')
  .controller('HomeController', function($scope, jeopardyAppService){

    jeopardyAppService.getData()
      .then(function(data){
        $scope.categories = data;
        console.log($scope.categories)
        window.glob5 = data
      })
})

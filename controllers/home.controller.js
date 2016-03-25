angular
  .module('jeopardyApp')
  .controller('HomeController', function($scope, jeopardyAppService){

    jeopardyAppService.buildUrl()
      .then(function(data){
        $scope.categories = data;
        console.log("data", data)
        window.glob5 = data
      })
          
})

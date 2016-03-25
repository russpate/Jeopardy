angular
  .module('jeopardyApp')
  .controller('HomeController', function($scope, jeopardyAppService){

    jeopardyAppService.buildUrl()
      .then(function(data){
        $scope.categories=data[0];
        $scope.categories
          .then(function(data){
            $scope.hundred = data.data.clues.filter(function(el){
              return el.value === 100;
            })
            $scope.hundredPts = $scope.hundred[Math.floor(Math.random() * $scope.hundred.length)]
          })
      })

})

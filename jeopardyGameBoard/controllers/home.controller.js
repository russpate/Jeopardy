var _= require('underscore')

angular
  .module('jeopardyApp')
  .controller('HomeController', function($rootScope, $scope, jeopardyAppService){
    $rootScope.score=0
    jeopardyAppService.getData()
      .then(function(data){
        $scope.categories = data;
        console.log($scope.categories)
        window.glob5 = data

        $scope.categories.forEach(function(el){
          //Andrew helped me with this
          if(el.data.clues_count > 5){
            el.data.clues=_.first(_.shuffle(el.data.clues),5)
          }
          for(var i=0; i < 5; i++){
            el.data.clues[i].value = 200 * (i + 1);
          }
          });
      })
    }
)

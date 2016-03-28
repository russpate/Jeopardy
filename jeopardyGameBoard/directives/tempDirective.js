angular
  .module('jeopardyApp')
  .directive('jepDr', function(){
    return {
      templateUrl:'../../jeopardyGameBoard/templates/jepDrTmp.html',
      restrict:'EA',
      scope:{
        cats:'='
      },
      controller: function($rootScope, $scope){
        $scope.addScore = function(input, answer, value){
          if(input === answer){
            $rootScope.score += value
          }else{
            $rootScope.score -= value
          };
        }
        $scope.hideModal = function (id) {
          $('#' + id).modal('hide')
        }
      }
    }

  })

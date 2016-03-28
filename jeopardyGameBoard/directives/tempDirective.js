angular
  .module('jeopardyApp')
  .directive('jepDr', function(){
    return {
      templateUrl:'../../jeopardyGameBoard/templates/jepDrTmp.html',
      restrict:'EA',
      scope:{
        cats:'='
      },
      link: function(scope, element, attributes){
      }
    }

  })

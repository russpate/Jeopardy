angular
  .module('jeopardyApp')
  .directive('jepDr', function(){
    return {
      templateUrl:'../templates/jepDrTmp.html',
      restrict:'E',
      scope:{
        question:'='
      },
      link: function(scope, element, attributes){

      }
    }

  })

angular
  .module('jeopardyApp')
  .directive('jepDr', function(){
    return {
      templateUrl:'../templates/jepDrTmp.html',
      restrict:'E',
      scope:{
        questOne:'@'
      },
      link: function(scope, element, attributes){
      }
    }

  })

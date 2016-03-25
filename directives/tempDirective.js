angular
  .module('jeopardyApp')
  .directive('jepDr', function(){
    return {
      templateUrl:'../templates/jepDrTmp.html',
      restrict:'E',
      scope:{
        clueValue:'@',
        clueQuestion:'@',
        clueAnswer:'@',
        clueTitle:'@',
        clueCategory:'@'
      },
      link: function(scope, element, attributes){
        
      }
    }

  })

angular
  .module('jeopardyApp')
  .directive('jepDr', function(){
    return {
      templateUrl:'../templates/jepDrTmp.html',
      restrict:'EA',
      scope:{
        cats:'='
      },
      link: function(scope, element, attributes){
      }
    }

  })

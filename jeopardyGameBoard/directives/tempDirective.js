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
        //Andrew helped me with these two functions.

        // Addscore is for tallying up a users total score
        // while in game play
        $scope.addScore = function(input, answer, value){
          //strip out html from answer https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/
          if(input === answer.toLowerCase().replace(/(<([^>]+)>)|'\'/ig,"")){
            $rootScope.score += value
          }else{
            $rootScope.score -= value
          };
        }
        //hideModal closes the modal after the user has submitted their answer
        $scope.hideModal = function (id) {
          $('#' + id).modal('hide')
          $("." + id).prop('disabled', true);
        }
        // // got example from frank / hanks demo in class
        // $scope.disableButton = function(id){
        //
        // }
      }
    }

  })

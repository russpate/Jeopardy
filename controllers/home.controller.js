angular
  .module('jeopardyApp')
  .controller('HomeController', function($scope, jeopardyAppService){

    jeopardyAppService.getData()
      .then(function(data){
        $scope.categories = data;
        console.log($scope.categories)
        window.glob5 = data
      })
      $scope.clueMagic=function(el){
        //thanks kathleen this should limit the returned results to 5, i think
        if(el.data.clues_count > 5){
        }
      };
      $scope.magic=function(el){
        //thanks kathleen for the for loop, this gets the values where they need to be
        for(i=0; i<5; i++){
             el.data.clues[i].value = 200 * (i + 1);
           }
      };

})

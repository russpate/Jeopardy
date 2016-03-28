angular
  .module('jeopardyApp')
  .service('jeopardyAppService', function($http,$q){
    var base = 'http://jservice.io/api/';
    function randomCat() {
      return  base + 'category?id=' + Math.floor(Math.random()*1600);
    }
    // var cacheEngine = $cacheFactory('jeopardyApp');

    function getData(){
      var urlRandomizer = [randomCat(),randomCat(),randomCat(),randomCat(),randomCat(),randomCat()]
      var promises = urlRandomizer.map(function(element) {
        return $http.get(element);
      })
      return $q.all(promises);
    } 

    return{
      getData : getData,
    }
  })

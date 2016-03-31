var _= require('underscore');

angular
  .module('jeopardyApp')
  .service('jeopardyAppService', JappService);

  JappService.$inject = ['$http','$q']
  function JappService($http,$q){
    var base = 'http://jservice.io/api/';
    function randomCat() {
      return  base + 'category?id=' + Math.floor(Math.random()*18418);
    }
    // var cacheEngine = $cacheFactory('jeopardyApp');
    function getData(){
      var urlRandomizer = [randomCat(),randomCat(),randomCat(),randomCat(),randomCat(),randomCat()]
      var promises = urlRandomizer.map(function(element) {
        return $http.get(element);
      })

      return $q.all(promises).then(function(categories){
        categories.forEach(function(el){
          //Andrew helped me with this
          if(el.data.clues_count > 5){
            el.data.clues=_.first(_.shuffle(el.data.clues),5)
          }
          for(var i=0; i < 5; i++){
            el.data.clues[i].value = 200 * (i + 1);
            }
        });
        return categories;
      })
    }
    return{
      getData : getData,
    }
  }

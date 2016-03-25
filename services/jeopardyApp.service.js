angular
  .module('jeopardyApp')
  .service('jeopardyAppService', function($http,$q){
    var base = 'http://jservice.io/api/';
    function randomCat() {
      return  base + 'category?id=' + Math.floor(Math.random()*1600);
    }
    // var cacheEngine = $cacheFactory('jeopardyApp');

    function buildUrl(){
      var urlRandomizer = [randomCat(),randomCat(),randomCat(),randomCat(),randomCat(),randomCat()]
      var promises = urlRandomizer.map(function(element) {
        return $http.get(element);
      })
      return $q.all(promises);
    }

      // return $q.all([
      //   urlRandomizer.map(function(data) {
      //     var defer = $q.defer();
      //     $http.get(base + data).then(function(el) {
      //       defer.resolve(el)
      //     })
      //     return defer.promise;
      //   })
      // ]).then(function(data) {
      //   console.log("KILL THE PROMISE: ", data)
      // })


      function allCategories(){
        return $q.all[randomCat(),randomCat(),randomCat(),randomCat(),randomCat(),randomCat()]
      };


    return{
      buildUrl : buildUrl,
      allCategories : allCategories
    }
  })

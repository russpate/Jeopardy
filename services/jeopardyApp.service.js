angular
  .module('jeopardyApp')
  .service('jeopardyAppService', function($http,$q){
    var base = 'http://jservice.io/api/';
    function randomCat() {
      return 'category?id=' + Math.floor(Math.random()*16);
    }
    // var cacheEngine = $cacheFactory('jeopardyApp');

    function buildUrl(){
      var urlRandomizer = [randomCat(),randomCat(),randomCat(),randomCat(),randomCat(),randomCat()]
      return $q.all([
        urlRandomizer.map(function(data) {
          var defer = $q.defer();
          $http.get(base + data).then(function(el) {
            defer.resolve(el)
          })
          return defer.promise;
        })
      ])
      function something(){
        return &q.all ([something,something])
      }


    }
    return{
      buildUrl : buildUrl
    }
  })

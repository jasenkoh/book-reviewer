(function () {

  var genresFactory = function($http) {
    var factory = {};

    factory.getGenres = function () {
      $http.get('/api/genres');
    };

    return factory;
  };

  genresFactory.$inject = ['$http'];
  angular.module('bookApp').factory('genresFactory', genresFactory);
}());

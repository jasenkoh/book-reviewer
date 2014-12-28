(function () {
  var BASE_API_URL = '/api/genres/';
  var genresFactory = function($resource) {
    var factory = {};

    factory.getGenres = function () {
      return $resource(BASE_API_URL).query();
    };

    return factory;
  };

  genresFactory.$inject = ['$resource'];
  angular.module('bookApp').factory('genresFactory', genresFactory);
}());

(function () {
  var genresFactory = function($resource) {
    var factory = {};

    factory.getGenres = function () {
      return $resource('/api/genres').query();
    };

    return factory;
  };

  genresFactory.$inject = ['$resource'];
  angular.module('bookApp').factory('genresFactory', genresFactory);
}());

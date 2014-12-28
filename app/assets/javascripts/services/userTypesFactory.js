(function () {
  var BASE_API_URL = '/api/user_types/'
  var userTypesFactory = function ($resource) {
    var factory = {};

    factory.getUserTypes = function() {
      return $resource(BASE_API_URL).query();
    };

    return factory;
  };

  userTypesFactory.$inject = ['$resource'];
  angular.module('bookApp').factory('userTypesFactory', userTypesFactory);
}());

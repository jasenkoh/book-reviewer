(function () {
  var booksFactory = function($http) {
    var factory = {};

    factory.getBooks = function() {
      return $http.get('/api/books');
    };

    factory.getBook = function(bookId) {
      return $http.get('/api/books/' + bookId);
    }
    return factory;
  };

  booksFactory.$inject = ['$http'];
  angular.module('bookApp').factory('booksFactory', booksFactory);
}());

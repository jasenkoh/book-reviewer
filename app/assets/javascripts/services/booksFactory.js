(function () {
  var BASE_API_URL = '/api/books/';
  var booksFactory = function($resource) {
    var factory = {};

    factory.getBooks = function() {
      return $resource(BASE_API_URL).query();
    };

    factory.getBook = function(bookId) {
      return $resource(BASE_API_URL + bookId).get();
    };

    factory.updateBook =  function(book) {
      return $resource(BASE_API_URL + book.id, null, { 'update': {
        method: 'PUT'
      }}).update(book).$promise;
    };

    factory.saveBook = function(book) {
      return $resource(BASE_API_URL).save(book).$promise;
    };

    factory.deleteBook = function(bookId) {
      return $resource(BASE_API_URL + bookId).delete().$promise;
    }

    return factory;
  };

  booksFactory.$inject = ['$resource'];
  angular.module('bookApp').factory('booksFactory', booksFactory);
}());

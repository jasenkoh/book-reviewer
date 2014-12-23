(function () {
  var booksFactory = function($resource, $state, $location) {
    var factory = {};

    factory.getBooks = function() {
      return $resource('/api/books').query();
    };

    factory.getBook = function(bookId) {
      return $resource('/api/books/' + bookId).get();
    };

    factory.updateBook =  function(book) {
      return $resource('/api/books/' + book.id, null, { 'update': {
        method: 'PUT'
      }}).update(book).$promise;
    };

    factory.saveBook = function(book) {
      return $resource('/api/books').save(book).$promise;
    };

    factory.deleteBook = function(bookId) {
      return $resource('/api/books/' + bookId).delete().$promise;
    }

    return factory;
  };

  booksFactory.$inject = ['$resource', '$state', '$location'];
  angular.module('bookApp').factory('booksFactory', booksFactory);
}());

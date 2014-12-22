(function () {
  var booksFactory = function($resource, $state, $location) {
    var factory = {};

    factory.getBooks = function() {
      return $resource('/api/books').query();
    };

    factory.getBook = function(bookId) {
      return $resource('/api/books/' + bookId).query();
    }

    factory.saveBook = function(book) {
      $resource('/api/books').save(book).$promise.then(function (response) {
        $location.path('/');
      }), function (error) {
        console.log(error);
        alert('Unable to save');
      };
    }
    return factory;
  };

  booksFactory.$inject = ['$resource', '$state', '$location'];
  angular.module('bookApp').factory('booksFactory', booksFactory);
}());

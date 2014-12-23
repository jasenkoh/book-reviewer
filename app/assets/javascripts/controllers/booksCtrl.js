(function () {
  var BooksCtrl = function($scope, booksFactory) {
    $scope.review = 'Create New Book';
    $scope.books = booksFactory.getBooks();
  };

  BooksCtrl.$inject = ['$scope', 'booksFactory'];
  angular.module('bookApp').controller('BooksCtrl', BooksCtrl);
}());

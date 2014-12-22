(function () {
  var BooksSaveCtrl = function($scope, book, genres, booksFactory) {
    $scope.book = book;
    $scope.genres = genres;
    $scope.message = "Create new review";

    $scope.saveReview = function() {
      booksFactory.saveBook($scope.book);
    };
  };

  BooksSaveCtrl.$inject = ['$scope', 'book', 'genres', 'booksFactory'];
  angular.module('bookApp').controller('BooksSaveCtrl', BooksSaveCtrl);
}());

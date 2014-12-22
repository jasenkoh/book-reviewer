(function () {
  var BooksSaveCtrl = function($scope, book, genres, booksFactory) {
    $scope.book = book;
    $scope.genres = genres;
    $scope.message = "Create new review";

    $scope.saveReview = function() {
      $scope.book.genre_ids = [];
      angular.forEach($scope.book.genres, function(genre, key) {
        $scope.book.genre_ids.push(genre.id);
      });

      booksFactory.saveBook($scope.book);
    };
  };

  BooksSaveCtrl.$inject = ['$scope', 'book', 'genres', 'booksFactory'];
  angular.module('bookApp').controller('BooksSaveCtrl', BooksSaveCtrl);
}());

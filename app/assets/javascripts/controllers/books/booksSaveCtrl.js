(function () {
  var BooksSaveCtrl = function($scope, genres, book, booksFactory, $routeParams, $state) {
    $scope.book = book;
    $scope.genres = genres;

    $scope.message = "Create new review";
    $scope.showSuccess = false;
    $scope.showDeleteButton = false;

    if ($state.current.name == 'books.edit') {
      book.$promise.then(function (response) {
        $scope.message = "Edit book";
        $scope.showDeleteButton = true;
      }, function(error) {
        $state.go('books.list');
      });
    };

    $scope.saveReview = function() {
      $scope.book.genre_ids = [];
      angular.forEach($scope.book.genres, function(genre, key) {
        $scope.book.genre_ids.push(genre.id);
      });

      var response;
      if ($scope.book.id != undefined) {
        response = booksFactory.updateBook($scope.book).then(function(book) {
            $scope.showSuccess = true;
            $scope.showError = false;
            $scope.successMessage = "You have saved book " + book.title + " successfully";
          }, function (error) {
            $scope.showSuccess = false;
            $scope.showError = true;
          });
      } else {
        response = booksFactory.saveBook($scope.book).then(function(book) {
          $state.go('books.edit', {
            id: book.id
          });
        });
      };
    };

    $scope.deleteBook = function(book) {
      booksFactory.deleteBook(book.id).then(function(response) {
        if (response.$resolved) {
          $state.go('books.list');
        };
      }, function (error) {
        console.log(error);
      });
    };
  };

  BooksSaveCtrl.$inject = ['$scope', 'genres', 'book', 'booksFactory', '$routeParams', '$state'];
  angular.module('bookApp').controller('BooksSaveCtrl', BooksSaveCtrl);
}());

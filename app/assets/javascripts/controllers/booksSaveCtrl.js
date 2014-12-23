(function () {
  var BooksSaveCtrl = function($scope, genresFactory, booksFactory, $routeParams, $location) {
    $scope.book = {};
    $scope.genres = genresFactory.getGenres();

    if ($routeParams.id != undefined) {
      booksFactory.getBook($routeParams.id).$promise.then(function(book) {
        $scope.book = book;
        $scope.message = "Edit " + book.title;
        $scope.showDeleteButton = true;
      }, function (error) {
        if (error.status == 404) {
          $location.path('/');
        };
      });
    };

    $scope.message = "Create new review";
    $scope.showSuccess = false;
    $scope.showDeleteButton = false;

    $scope.saveReview = function() {
      $scope.book.genre_ids = [];
      angular.forEach($scope.book.genres, function(genre, key) {
        $scope.book.genre_ids.push(genre.id);
      });

      var response;
      if ($scope.book.id != undefined) {
        response = booksFactory.updateBook($scope.book).then(function(book) {
            $scope.showSuccess = true;
            $scope.successMessage = "You have saved book " + book.title + " successfully";
          }, function (error) {
            $scope.showError = true;
          });
      } else {
        response = booksFactory.saveBook($scope.book).then(function(book) {
        $location.path('/books/edit/' + book.id);
      });
      };
    };

    $scope.deleteBook = function(book) {
      booksFactory.deleteBook(book.id).then(function(response) {
        if (response.$resolved) {
          $location.path('/');
        };
      }, function (error) {
        console.log(error);
      });
    };
  };

  BooksSaveCtrl.$inject = ['$scope', 'genresFactory', 'booksFactory', '$routeParams', '$location'];
  angular.module('bookApp').controller('BooksSaveCtrl', BooksSaveCtrl);
}());

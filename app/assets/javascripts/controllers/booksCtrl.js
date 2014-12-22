(function () {
  var BooksCtrl = function($scope, books) {
    $scope.review = 'Create Review';
    $scope.books = books;
  };

  BooksCtrl.$inject = ['$scope', 'books'];
  angular.module('bookApp').controller('BooksCtrl', BooksCtrl);
}());

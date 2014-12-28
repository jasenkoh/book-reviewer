(function () {
  var BooksCtrl = function($scope, books) {
    $scope.review = 'Create New Book';
    $scope.books = books;

    $scope.$on('auth:login-error', function(ev, user) {
        alert('Welcome ', user.email);
    });
  };

  BooksCtrl.$inject = ['$scope', 'books'];
  angular.module('bookApp').controller('BooksCtrl', BooksCtrl);
}());

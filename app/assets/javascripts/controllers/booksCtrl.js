(function () {
  var BooksCtrl = function($scope) {
    $scope.book = 'Welcome to books template'
  };
  BooksCtrl.$inject = ['$scope'];
  angular.module('bookApp').controller('BooksCtrl', BooksCtrl);
}());

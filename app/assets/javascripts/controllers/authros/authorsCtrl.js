(function () {
  var AuthorsCtrl = function ($scope) {
    $scope.author = 'Welcome to authors template';
  };
  AuthorsCtrl.$inject = ['$scope'];
  angular.module('bookApp').controller('AuthorsCtrl', AuthorsCtrl);
}());

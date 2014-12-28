(function() {
  var UserSessionCtrl = function($scope, $state, $auth) {
    $scope.updateAccount = function(user) {
      $auth.updateAccount(user);
    };

    $scope.$on('auth:login-success', function(ev, reason) {
      $state.go('books.list');
    });

    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.authErrors = reason.errors;
      $scope.errorsCount = $scope.authErrors.length;
    });

    $scope.$on('auth:logout-success', function(ev) {
      alert('goodbye');
  });
  }

  UserSessionCtrl.$inject = ['$scope', '$state', '$auth'];

  angular.module('bookApp').controller('UserSessionCtrl', UserSessionCtrl);
}());

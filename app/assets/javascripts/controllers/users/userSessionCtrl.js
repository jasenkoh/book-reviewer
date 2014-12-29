(function() {
  var UserSessionCtrl = function($scope, $state, $auth, userTypes) {
    $scope.userTypes = userTypes;
    $scope.showSuccess = false;

    $scope.updateAccount = function(user) {
      $auth.updateAccount(user);
    };

    $scope.$on('auth:account-update-success', function(ev) {
      $scope.showSuccess = true;
      $scope.successMessage = "Profile updated";
    });

    $scope.$on('auth:account-update-error', function(ev, reason) {
      $scope.showSuccess = false;
      if (reason.errors.email) {
        $scope.authErrors = [];
        $scope.authErrors.push("Email already taken");
        $scope.errorsCount = $scope.authErrors.length;
      };
    });

    $scope.$on('auth:login-success', function(ev, reason) {
      $state.go('books.list');
    });

    $scope.$on('auth:login-error', function(ev, reason) {
      $scope.authErrors = reason.errors;
      $scope.errorsCount = $scope.authErrors.length;
    });

    $scope.$on('auth:logout-success', function(ev) {
      alert('goodbye');
      $state.go('books.list');
    });
  }

  UserSessionCtrl.$inject = ['$scope', '$state', '$auth', 'userTypes'];

  angular.module('bookApp').controller('UserSessionCtrl', UserSessionCtrl);
}());

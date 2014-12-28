(function() {
  var UserRegistrationCtrl = function($scope, $auth, $state, userTypes) {
    $scope.userTypes = userTypes;

    $scope.submitRegistration = function (user) {
      user.user_type_id = $scope.user_type;
      $auth.submitRegistration(user);
    }

    $scope.$on('auth:registration-email-success', function(ev, message) {
      alert("A registration email was sent to " + message.email);
      $state.go('books.list');
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
      $scope.authErrors = reason.errors.full_messages;
      $scope.errorsCount = $scope.authErrors.length;
    });
  };

  UserRegistrationCtrl.$inject = ['$scope', '$auth', '$state', 'userTypes'];
  angular.module('bookApp').controller('UserRegistrationCtrl', UserRegistrationCtrl);
}());

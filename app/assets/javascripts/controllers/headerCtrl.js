(function () {
  var HeaderCtrl = function($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  };

  HeaderCtrl.$inject = ['$scope', '$location'];
  angular.module('bookApp').controller('HeaderCtrl', HeaderCtrl);
}());

(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/success-alert.html',
      transclude: false,
      scope: false
    };
  };

  angular.module('bookApp').directive('successAlert', directive);
}());

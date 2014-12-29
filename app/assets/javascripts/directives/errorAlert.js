(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/error-alert.html',
      transclude: false,
      scope: false
    };
  };

  angular.module('bookApp').directive('errorAlert', directive);
}());

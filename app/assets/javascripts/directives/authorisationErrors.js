(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/authorisation-errors.html',
      transclude: false,
      scope: false
    };
  };

  angular.module('bookApp').directive('authorisationErrors', directive);
}());

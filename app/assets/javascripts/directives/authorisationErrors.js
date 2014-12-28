(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'authorisation-errors.html',
      transclude: false,
      scope: false
    };
  };

  angular.module('bookApp').directive('authorisationErrors', directive);
}());

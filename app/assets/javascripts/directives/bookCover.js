(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/book-cover.html',
      replace: true
    };
  };

  angular.module('bookApp').directive('bookCover', directive);
}());

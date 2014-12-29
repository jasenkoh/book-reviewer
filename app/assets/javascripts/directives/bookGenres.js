(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/book-genres.html',
      scope: {
        genres: '='
      }
    };
  };

  angular.module('bookApp').directive('bookGenres', directive);
}());

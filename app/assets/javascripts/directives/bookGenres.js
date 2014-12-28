(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'book-genres.html',
      scope: {
        genres: '='
      }
    };
  };

  angular.module('bookApp').directive('bookGenres', directive);
}());

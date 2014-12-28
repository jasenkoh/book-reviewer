(function() {
  var directive = function() {
    return {
      restrict: 'E',
      templateUrl: 'book-cover.html',
      replace: true
    };
  };

  angular.module('bookApp').directive('bookCover', directive);
}());

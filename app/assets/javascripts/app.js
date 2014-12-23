(function () {
  var app = angular.module('bookApp', ['ngRoute',
    'ngResource',
    'ui.router',
    'templates',
    'checklist-model']);

  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'BooksCtrl',
        templateUrl: 'books.html'
      })
      .when('/authors', {
        controller: 'AuthorsCtrl',
        templateUrl: 'authors.html'
      })

      .when('/books/new', {
        controller: 'BooksSaveCtrl',
        templateUrl: 'book-save.html'
      })

      .when('/books/edit/:id', {
        controller: 'BooksSaveCtrl',
        templateUrl: 'book-save.html'
      })
      .otherwise({ redirectTo: '/' });
      })

  .directive('bookCover', function () {
    return {
      restrict: 'E',
      templateUrl: 'book-cover.html',
      replace: true
    };
  })
  .directive('bookGenres', function() {
    return {
      restrict: 'E',
      templateUrl: 'book-genres.html',
      scope: {
        genres: '='
      }
    }
  });
}());

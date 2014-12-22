(function () {
  var app = angular.module('bookApp', ['ngRoute',
    'ngResource',
    'ui.router',
    'templates']);

  app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        controller: 'BooksCtrl',
        templateUrl: 'books.html',
        resolve: {
          books: ['booksFactory', function(booksFactory){
            return booksFactory.getBooks();
          }]
        }
      })
      .when('/authors', {
        controller: 'AuthorsCtrl',
        templateUrl: 'authors.html'
      })

      .when('/books/new', {
        controller: 'BooksSaveCtrl',
        templateUrl: 'book-save.html',
        resolve: {
          book: [function() {
            return {};
          }],
          genres: ['genresFactory', function(genresFactory) {
            return genresFactory.getGenres();
          }]
        }
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

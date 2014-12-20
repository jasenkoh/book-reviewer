(function () {
  var app = angular.module('bookApp', ['ngRoute', 'templates']);

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'BooksCtrl',
        templateUrl: 'books.html'
      })
      .when('/authors', {
        controller: 'AuthorsCtrl',
        templateUrl: 'authors.html'
      })
      .otherwise({ redirectTo: '/' });
  });
}());

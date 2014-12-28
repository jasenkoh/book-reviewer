(function () {
  var app = angular.module('bookApp', ['ngRoute',
    'ngResource',
    'ui.router',
    'templates',
    'ngCookies',
    'checklist-model',
    'ng-token-auth']);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('books', {
      url: '/',
      abstract: true,
      template: '<div ui-view></div>'
    })

    .state('books.list', {
      url: '',
      controller: 'BooksCtrl',
      templateUrl: 'books.html',
      resolve: {
        books: ['booksFactory', function(booksFactory) {
          return booksFactory.getBooks();
        }]
      }
    })

    .state('books.new', {
      url: 'books/new',
      controller: 'BooksSaveCtrl',
      templateUrl: 'book-save.html',
      resolve: {
        genres: ['genresFactory', function(genresFactory) {
          return genresFactory.getGenres();
        }],
        book: [function() {
          return {};
        }]
      }
    })

    .state('books.edit', {
      url: 'books/edit/:id',
      controller: 'BooksSaveCtrl',
      templateUrl: 'book-save.html',
      resolve: {
        genres: ['genresFactory', function(genresFactory) {
          return genresFactory.getGenres();
        }],
        book: ['booksFactory', '$stateParams', function(booksFactory, $stateParams) {
          return booksFactory.getBook($stateParams.id);
        }]
      }
    })

    .state('users', {
      url: '/users',
      abstract: true,
      template: '<div ui-view></div>'
    })

    .state('users.sign-in', {
      url: '/sign-in',
      templateUrl: 'user_session/new.html',
      controller: 'UserSessionCtrl'
    })

    .state('users.register', {
      url: '/register',
      templateUrl: 'user_registration/new.html',
      controller: 'UserRegistrationCtrl'
    })

    .state('users.edit', {
      url: '/edit',
      templateUrl: 'user_session/edit.html',
      controller: 'UserSessionCtrl'
    })
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
  })
  .directive('authorisationErrors', function() {
    return {
      restrict: 'E',
      templateUrl: 'authorisation-errors.html',
      transclude: false,
      scope: false
    }
  });
}());

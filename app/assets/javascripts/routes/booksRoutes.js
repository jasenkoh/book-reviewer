'use strict'

angular.module('bookApp').config(function($stateProvider) {
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
      auth: function($auth) {
        return $auth.validateUser();
      },
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
      auth: function($auth) {
        return $auth.validateUser();
      },
      genres: ['genresFactory', function(genresFactory) {
        return genresFactory.getGenres();
      }],
      book: ['booksFactory', '$stateParams', function(booksFactory, $stateParams) {
        return booksFactory.getBook($stateParams.id);
      }]
    }
  });
});

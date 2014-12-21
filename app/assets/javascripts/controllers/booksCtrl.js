(function () {
  var BooksCtrl = function($scope, booksFactory) {
    $scope.book = 'Welcome to book reviewer '
    booksFactory.getBooks()
      .success(function (books){
        $scope.books = books;
      })
      .error(function (data, status){
        alert(status);
        console.log(data);
      });
  };

  BooksCtrl.$inject = ['$scope', 'booksFactory'];
  angular.module('bookApp').controller('BooksCtrl', BooksCtrl);
}());

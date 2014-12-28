'use strict'

angular.module('bookApp').config(function($stateProvider){
    $stateProvider.state('authors', {
      url: '/authors',
      controller: 'AuthorsCtrl',
      templateUrl: 'authors.html'
    })
})

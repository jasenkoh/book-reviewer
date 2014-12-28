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
  });
}());

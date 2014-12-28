'use strict'

angular.module('bookApp').config(function($stateProvider) {
  $stateProvider
  .state('users', {
    url: '/users',
    abstract: true,
    template: '<div ui-view></div>'
  })
  .state('users.sign-in', {
    url: '/sign-in',
    templateUrl: 'user_session/new.html',
    controller: 'UserSessionCtrl',
    resolve: {
      userTypes: function() {
        return {};
      }
    }
  })
  .state('users.register', {
    url: '/register',
    templateUrl: 'user_registration/new.html',
    controller: 'UserRegistrationCtrl',
    resolve: {
      userTypes: ['userTypesFactory', function(userTypesFactory) {
        return userTypesFactory.getUserTypes();
      }]
    }
  })
  .state('users.edit', {
    url: '/edit',
    templateUrl: 'user_session/edit.html',
    controller: 'UserSessionCtrl',
    resolve: {
      auth: function($auth) {
        return $auth.validateUser();
      },
      userTypes: ['userTypesFactory', function(userTypesFactory) {
        return userTypesFactory.getUserTypes();
      }]
    }
  });
});

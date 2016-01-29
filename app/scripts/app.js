'use strict';

/**
 * @ngdoc overview
 * @name hackerNewsHomepageApp
 * @description
 * # hackerNewsHomepageApp
 *
 * Main module of the application.
 */
angular
  .module('hackerNewsHomepageApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

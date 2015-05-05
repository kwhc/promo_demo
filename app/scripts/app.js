'use strict';

/**
 * @ngdoc overview
 * @name promoDemoApp
 * @description
 * # promoDemoApp
 *
 * Main module of the application.
 */
angular
  .module('promoDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new_promo.html',
        controller: 'NewPromoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

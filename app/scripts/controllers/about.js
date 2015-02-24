'use strict';

/**
 * @ngdoc function
 * @name promoDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the promoDemoApp
 */
angular.module('promoDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

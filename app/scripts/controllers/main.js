'use strict';

/**
 * @ngdoc function
 * @name promoDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the promoDemoApp
 */
angular.module('promoDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

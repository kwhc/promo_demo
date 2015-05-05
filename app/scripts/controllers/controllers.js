'use strict';

/**
 * @ngdoc function
 * @name promoDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the promoDemoApp
 */
angular.module('promoDemoApp')
  .controller('NewPromoCtrl', function ($scope) {
          
    $scope.promocode = "";
    $scope.parent={promodatebegin:new Date(),promodateend:new Date()};
    //$scope.parent={promodateend:new Date()};
    $scope.promovenue = [];
    $scope.promolimit=null;
    $scope.promobottlelimit=null;
    $scope.promodiscount=null;
    $scope.promodiscounttype=null;
    
    $scope.dpOpened = {
      singledateopened: false,
      rangedatebegin: false,
      rangedateend: false
    };
    
    $scope.open = function($event, opened) {
      $event.preventDefault();
      $event.stopPropagation();
  
      $scope.dpOpened[opened] = true;
    };
  
  });

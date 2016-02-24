'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

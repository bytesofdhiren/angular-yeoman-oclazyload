'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp')
    .controller('AboutCtrl',['helloService', function (helloService) {  
        this.helloMessage = helloService.SayHello();
    }]);
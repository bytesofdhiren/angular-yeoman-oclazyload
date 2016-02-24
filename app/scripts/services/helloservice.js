'use strict';

/**
 * @ngdoc service
 * @name helloWorldApp.helloService
 * @description
 * # helloService
 * Service in the helloWorldApp.
 */
angular.module('helloWorldApp')
  .factory('helloService', function () {
    return {
        SayHello: function(){
            return "Hello World";
        }
    };        
  });

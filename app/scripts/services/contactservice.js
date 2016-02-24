'use strict';

/**
 * @ngdoc service
 * @name helloWorldApp.contactService
 * @description
 * # contactService
 * Service in the helloWorldApp.
 */
angular.module('helloWorldApp.contact')
  .factory('contactService', function () {
     return {
        giveMyContactDetails: function(){
            return "RouteRabbit Inc, dhiren.patel@routerabbit.com";
        }
    };  
  });

'use strict';

/**
 * @ngdoc function
 * @name helloWorldApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the helloWorldApp
 */
angular.module('helloWorldApp.contact', [])
    .controller('ContactCtrl',['contactService', function (contactService) {        
        this.myContactDetails = contactService.giveMyContactDetails();
    }]);
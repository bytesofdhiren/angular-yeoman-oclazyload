'use strict';

/**
 * @ngdoc overview
 * @name helloWorldApp
 * @description
 * # helloWorldApp
 *
 * Main module of the application.
 */
angular
  .module('helloWorldApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'oc.lazyLoad',    
  ])
  .config(function ($routeProvider, $ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
      modules: [{
        name: 'helloWorldApp.contact',
        files: ['scripts/controllers/contact.js', 'scripts/services/contactservice.js']
      }]
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

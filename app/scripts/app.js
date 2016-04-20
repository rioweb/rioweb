'use strict';

/**
 * @ngdoc overview
 * @name riowebApp
 * @description
 * # riowebApp
 *
 * Main module of the application.
 */
angular
  .module('riowebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/inicio.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/quienessomos', {
        templateUrl: 'views/quienessomos.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).directive('navbar',function(){
    return{
      restrict: 'E',
      templateUrl:'/directives/navbar.html'
    };
  })
  .controller('navctrl', ['$scope','$location',function($scope,$location){

      $scope.isActive = function(ab){
        return ab === $location.path(); 
      };  
  }]);

window.apartmentApp = angular.module('apartmentApp', ['ui.router']);

stocksUI.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'templates/login.html',
      controller: "mainCtrl"
    })
    .state('manageApt', {
      url: '/manageApt',
      templateUrl: 'templates/manageApt.html',
      controller: "manageAptCtrl"
    })
    .state('manageUser', {
      url: '/manageUser',
      templateUrl: 'templates/manageUser.html',
      controller: "manageUserCtrl"
    })
});
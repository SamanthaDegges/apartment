angular.module('starter.services', []).
 controller('manageUserCtrl', function ($scope, $http, notify) {
   $scope.users = $http.get('localhost:3000/users');
 }).
factory('notify', ['$window', function(win) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       win.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);
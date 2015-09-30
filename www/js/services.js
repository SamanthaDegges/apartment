angular.module('starter.services', []).
 controller('manageUserCtrl', function ($scope, $http, notify) {
   $scope.users = $http.get('https://evening-beyond-5571.herokuapp.com/users');
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
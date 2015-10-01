angular.module('starter.services', [])

.controller('manageUserCtrl', function ($scope, $http, notify) {
  $scope.users = $http.get('localhost:3000/users');
}).
  factory('notify', ['$window', function(win) {
    var msgs = [];
    return function (msg) {
      msgs.push(msg);
      if (msgs.length == 3) {
        win.alert(msgs.join("\n"));
        msgs = [];
      }
    }
  }])
.factory('aptFactory', function($http) {
  var apts = () => {};
  apts.get = () => $http.get('https://evening-beyond-5571.herokuapp.com/apts');
  apts.add = (tickerObj) => $http.post('https://evening-beyond-5571.herokuapp.com/apts', {newTicker: tickerObj});
  //apts.del = (tickerSym, refresh) => $http.post('https://evening-beyond-5571.herokuapp.com/delete', {tickerSymbol: tickerSym});

  return Tracked;
})

.factory('userFactory', function($http) {


  });

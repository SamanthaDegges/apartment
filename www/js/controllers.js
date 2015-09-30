angular.module('starter.controllers', [])

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('loginCtrl', function($scope) {
  })
  .controller('manageUserCtrl', function($scope, $http) {
    $scope.users = $http.get('https://evening-beyond-5571.herokuapp.com/users');
    
  })
  .controller('manageAptCtrl', function($scope) {
  })
  .controller('AccountCtrl', function($scope) {
});
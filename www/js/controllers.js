var app = angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {
    // $scope.title = "title"
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })

  .controller('loginCtrl', function($scope) {
  })
  .controller('manageUserCtrl', function($scope, $http) {
    $scope.users = $http.get('localhost:3000/managers/');
    $scope.createuser = function(email, pwd, manager){
      $http.post('localhost:3000/managers/', {email, pwd, manager}).
      then(console.log('success'), console.log('fail'));
    }
  })
  .controller('manageAptCtrl', function($scope) {

    $scope.addApt = function(){
      console.log("YAY!");
    }

  })
  .controller('AccountCtrl', function($scope) {
});

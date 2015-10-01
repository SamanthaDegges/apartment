var app = angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {
    // $scope.title = "title"
  })

  .controller('AccountCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  })




.service('createLogin', function($http) {
  this.assemble = function(email, password){
    var login = {
      email: email,
      password: password
    }
    $http.post('http://localhost:3000/login', login)
    .then (function(data){
      console.log(data)
    })
    .catch (function(err){
      console.log(err)
    })
  }
})

//this controller sends login data to be posted and created in DB
  .controller('loginCtrl', function($scope, $http, createLogin) {
    $scope.submitLoginInfo = function(){
        createLogin.assemble($scope.email, $scope.password);
      }
  })

  .controller('manageUserCtrl', function($scope, $http) {
    $scope.users = $http.get('localhost:3000/managers/');
    $scope.createuser = function(email, pwd, manager){
      $http.post('localhost:3000/managers/', {email, pwd, manager}).
      then(console.log('success'), console.log('fail'));
    }





  .controller('manageUserCtrl', function($scope) {

  })
  .controller('manageAptCtrl', function($scope) {

    $scope.addApt = function(){
      console.log("YAY!");
    }

  })
  .controller('AccountCtrl', function($scope) {
});

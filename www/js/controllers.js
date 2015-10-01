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
  .controller('manageUserCtrl', function($scope) {
  })
  .controller('manageAptCtrl', function($scope) {

    $scope.addApt = function(){
      console.log("YAY!");
    }

  });

//app.service('propService', function($http){
//  this.add = function(params){
//    return $http.post("lhttp://localhost:3000/managers/newProperty", params)
//  }
//});




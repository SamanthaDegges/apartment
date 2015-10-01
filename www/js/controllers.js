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
    this.assemble = function(email, password, manager){
      var login = {
        email: email,
        password: password,
        manager: manager
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

    .controller('loginCtrl', function($scope, $http, createLogin) {
      $scope.submitLoginInfo = function(){
          createLogin.assemble($scope.email, $scope.pwd, $scope.manager);
          console.log($scope.email)
        }
    })

  .controller('manageUserCtrl', function($scope, $http) {
    var users = [];
    $scope.createuser = function(email, pwd, manager){
      users.push({email: email, password: pwd, manager: manager});
      console.log('users');
      // $http.post('localhost:3000/managers/', {email, pwd, manager}).
      // then(console.log('success'), console.log('fail'));
    }
  })
  .service('Props', function($http) {
    this.add = (newProp) => $http.post("http://localhost:3000/managers/newProperty", newProp);
    this.getProps = $http.get("http://localhost:3000/managers/properties")
  })
  .controller('manageAptCtrl', function($scope, $http, Props) {
    console.log("in manageAptCtrl");
    $scope.addProperty = function(prop){
      Props.add(prop)
        .then(function(res) {
          console.log(res.data);
          $scope.prop = {};
        })
        .catch(function(error){
          prop = error;
        });

      };
    // $scope.apartments = $http.get('localhost:3000/managers/newApartment/');
    $scope.addApt = function(apartment){
      console.log(apartment);
      $http.post('http://localhost:3000/managers/newApartment/', apartment).
      then(console.log('success'));
    };
    })
  ;

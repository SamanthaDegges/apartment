var app = angular.module('starter.controllers', [])


.service('Props', function($http) {
  this.add = (newProp) => $http.post("http://localhost:3000/managers/newProperty", newProp);
  //props.getProps = $http.get("http://localhost:3000/managers/properties")
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

  })
  .controller('manageAptCtrl', function($scope, Props) {
    $scope.addProperty = function(prop){
      Props.add(prop)
        .then(function(res) {
          console.log(res.data);
          $scope.prop = {};
        })
        .catch(function(error){
          prop = error;
        });
        //
        //propsService.add($scope.prop)
        //  .then(function(res) {
        //    console.log(res.data);
        //    $scope.prop = {};
        //  })
        //  .catch(function(error){
        //    $scope.prop = error;
        //  })
      };


  //.controller('AccountCtrl', function($scope) {
});

//
//var propertySchema =  mongoose.Schema({
//  manager: [{type: mongoose.Schema.ObjectId, ref: 'user'}],
//  name: String,
//  address: String,
//  apartments: [{type: mongoose.Schema.ObjectId, ref: 'Apartment'}]
//});

//


  //.factory('aptFactory', function($http) {
  //  var apts = () => {};
  //  apts.get = () => $http.get('https://evening-beyond-5571.herokuapp.com/apts');
  //  apts.add = (tickerObj) => $http.post('https://evening-beyond-5571.herokuapp.com/apts', {newTicker: tickerObj});
  //  //apts.del = (tickerSym, refresh) => $http.post('https://evening-beyond-5571.herokuapp.com/delete', {tickerSymbol: tickerSym});
  //
  //  return Tracked;
  //})

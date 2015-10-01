angular.module('starter.services', [])

.factory('aptFactory', function($http) {
  var apts = () => {};
  apts.get = () => $http.get('https://evening-beyond-5571.herokuapp.com/apts');
  apts.add = (tickerObj) => $http.post('https://evening-beyond-5571.herokuapp.com/apts', {newTicker: tickerObj});
  //apts.del = (tickerSym, refresh) => $http.post('https://evening-beyond-5571.herokuapp.com/delete', {tickerSymbol: tickerSym});

  return Tracked;
})

.factory('userFactory', function($http) {



  })



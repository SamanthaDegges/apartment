angular.module('starter.controllers', [])

.controller('mainCtrl', function($scope) {
  $scope.title = "title"
});

.controller('manageAptCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


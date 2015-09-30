angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope) {
    // $scope.title = "title"
  })


  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
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
  });

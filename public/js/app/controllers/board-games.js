angular.module('board-games').controller('boardGamesCtrl',
  function ($scope, users) {
    $scope.user = users.user;   
  }
);

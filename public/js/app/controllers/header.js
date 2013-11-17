angular.module('board-games').controller('headerCtrl',
  function ($scope, nav, users) {
    $scope.nav = nav.nav;
    $scope.user = users.user;
  }
);


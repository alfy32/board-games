angular.module('board-games').controller('winCtrl',
  function ($scope, game) {

    if(game.players.length === 0)
      window.location.href = '#/farkle';
    
    $scope.players = game.players;
    $scope.game = game;
    
  }
);
angular.module('board-games').controller('enterScoreCtrl',
  function ($scope, game) {

    if(game.players.length === 0)
      window.location.href = '#/farkle';
    
    $scope.players = game.players;
    $scope.game = game;
    
    $scope.submit = function() {
      game.addScore(+$scope.score || 0);
      game.nextTurn();

      if(game.over()) {
        window.location.href = '#/farkle/win';
      } else {
        $scope.score = '';
        jQuery('#enter-score').focus();
      }
    }
  }
);
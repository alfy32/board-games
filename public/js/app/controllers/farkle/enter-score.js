angular.module('board-games').controller('enterScoreCtrl',
  function ($scope, game) {

    if(game.players.length === 0)
      window.location.href = '#/farkle';
    
    $scope.players = game.players;
    $scope.game = game;
    
    $scope.submit = function() {
      $scope.players[game.turn].score += +$scope.score || 0;

      if($scope.players[game.turn].score >=  $scope.game.winningScore)
        $scope.players[game.turn].btn = 'btn-danger';

      if(game.nextTurn() === 'win') {
        window.location.href = '#/farkle/win';
      } else {
        $scope.score = '';
        jQuery('#enter-score').focus();
      }
    }
  }
);
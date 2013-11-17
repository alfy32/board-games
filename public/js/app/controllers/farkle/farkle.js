angular.module('board-games').controller('farkleCtrl',
  function ($scope, game) {
    
    $scope.players = game.players;
    game.turn = 0;

    $scope.addPlayer = function() {
      $scope.players.push({
        placeholder: 'Player ' + ($scope.players.length+1),
        btn: 'btn-success',
        name: '',
        score: 0
      });
    };

    if(!$scope.players.length) {
      $scope.addPlayer();
      $scope.addPlayer();
    }

    $scope.removePlayer = function() {
      $scope.players.pop();
    };

    $scope.submit = function() {
      window.location.href = '#/farkle/enter-score';
    };
   
  }
);
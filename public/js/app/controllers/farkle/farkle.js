angular.module('board-games').controller('farkleCtrl',
  function ($scope, game, nav) {

    $scope.nameOfGame = "Farkle";
    nav.makeActive($scope.nameOfGame);
        
    $scope.players = game.players;
    game.turn = 0;

    $scope.buttons = getButtons();

    if(!$scope.players.length) {
      game.addPlayer();
      game.addPlayer();
    }

    function addPlayer() {
      game.addPlayer();
    };

    function removePlayer () {
      $scope.players.pop();
    };

    function reset () {
      game.reset();
      console.log('reset')
    };

    function play () {
      window.location.href = '#/farkle/enter-score';
    };
    
    function getButtons() {
      return [
        {
          type: "button",
          click: addPlayer,
          label: "Add Player"
        },
        {
          type: "button",
          click: removePlayer,
          label: "Remove Player"
        },
        {
          type: "button",
          click: reset,
          label: "Reset"
        },
        {
          type: "submit",
          click: play,
          label: "Play"
        }
      ];
    }


  }
);

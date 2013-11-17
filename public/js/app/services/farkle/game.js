angular.module('board-games').factory('game',
  function ($http) {

    var game = {
      players: [],
      turn: 0,
      nextTurn: nextTurn,
      winningScore: 10000,
      lastTurn: false,
      winnerTurn: -1
    };

    function nextTurn() {
      game.turn++;

      if(game.turn >= game.players.length)
        game.turn = 0;

      if(game.players[game.turn].score >= game.winningScore) {
        game.winner = game.players[game.turn];
        for(var i in game.players) {
          if(game.players[i].score > game.winner.score)
            game.winner = game.players[i];
        }
        console.log('lastTurn')
        return 'win';
      }      
    }

    return game;
  }
);

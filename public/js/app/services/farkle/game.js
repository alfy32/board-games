angular.module('board-games').factory('game',
  function ($http) {

    var game = {
      players: [],
      turn: 0,
      winningScore: 10000,
      lastTurn: false,
      nextTurn: nextTurn,
      over: over,
      addScore: addScore,
      reset: reset,
      addPlayer: addPlayer
    };

    function nextTurn() {
      checkScore();
      game.turn = (game.turn+1) % game.players.length;
    }

    function checkScore() {
      game.players[game.turn].winning = game.players[game.turn].score >= game.winningScore;
    }

    function over() {
      return game.players[game.turn].winning;
    }

    function findWinner() {
      game.winner = game.players[0];

      for(var i in game.players) {
        if(game.players[i].score > game.winner.score)
          game.winner = game.players[i];
      }
    }

    function addScore(score) {
      game.players[game.turn].score += +score || 0;
    }

    function reset() {
      game.turn = 0;
      game.lastTurn = false;
      game.players.length = 0;

      game.addPlayer();
      game.addPlayer();
    }

    function addPlayer(name) {
      game.players.push({
        placeholder: 'Player ' + (game.players.length+1),
        winning: false,
        name: '',
        score: 0
      });
    };

    return game;
  }
);

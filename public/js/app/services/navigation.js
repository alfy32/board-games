var nav = [
  {
    name: 'main',
    class: 'active',
    show: false,
    url: '/',
    ctrl: 'boardGamesCtrl',
    tmpl: 'views/board-games.html'
  }, 
  {
    name: 'Farkle',
    class: '',
    show: true,
    url: '/farkle',
    ctrl: 'farkleCtrl',
    tmpl: 'views/farkle/farkle.html'
  },
  {
    name: 'enter-score',
    class: '',
    show: false,
    url: '/farkle/enter-score',
    ctrl: 'enterScoreCtrl',
    tmpl: 'views/farkle/enter-score.html'
  },
  {
    name: 'win',
    class: '',
    show: false,
    url: '/farkle/win',
    ctrl: 'winCtrl',
    tmpl: 'views/farkle/win.html'
  }
];

angular.module('board-games').factory('nav',
  function () {
    return nav;
  }
);

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
  },
  {
    name: 'Generic',
    class: '',
    show: true,
    url: '/generic',
    ctrl: 'generic/mainCtrl',
    tmpl: 'views/generic/generic.html'
  },
  {
    name: 'enter-score',
    class: '',
    show: false,
    url: '/generic/enter-score',
    ctrl: 'generic/enterScoreCtrl',
    tmpl: 'views/generic/enter-score.html'
  },
  {
    name: 'win',
    class: '',
    show: false,
    url: '/generic/win',
    ctrl: 'generic/winCtrl',
    tmpl: 'views/generic/win.html'
  }
];

angular.module('board-games').factory('nav',
  function () {

    function makeActive(name) {
      for(var i in nav) {
        if(nav[i].name == name)
          nav[i].class = 'active';
        else
          nav[i].class = '';
      }
    }

    return {
      nav: nav,
      makeActive: makeActive
    };
  }
);

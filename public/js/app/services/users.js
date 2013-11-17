angular.module('board-games').factory('users', function () {

  var user = {
    name: "User",
    id: -1
  };

  return {
    user: user
  };
});
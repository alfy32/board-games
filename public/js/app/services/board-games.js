angular.module('board-games').factory('boardGames',
  function ($http) {

    // function save(appointment) {
    //   $http.post('/appointments', appointment).then(function (resp) {
    //     if(resp.data.success) {
    //       appointment.id = resp.data.id;
    //     } else {
    //       console.log("Save appointment failed.");
    //     }
    //   });
    // }

    // function get(cb) {
    //   $http.get('/appointments').then(function (resp) {
    //     cb(resp.data);
    //   });
    // }





    // function set(foodItems, cb) {
    //   $http.post('/foodItems', foodItems).then(function (resp) {
    //     if(resp.data === "ok") {
    //       cb("Saved Successfully.");
    //     } else {
    //       cb(resp);
    //     }
    //   });
    // }

    // function update(foodItem, cb) {
    //   $http.put('/foodItem/'+foodItem._id, foodItem).then(function (resp) {
    //     cb(resp.data);
    //   })
    // }

    // function create(foodItem, cb) {
    //   $http.post('/foodItem', foodItem).then(function (resp) {
    //     cb(resp.data);
    //   })
    // }

    // function remove(id, cb) {
    //   $http.delete('/foodItem/' + id).then(function (resp) {
    //     cb(resp.data);
    //   })
    // }

    return {
      // save: save,
      // get: get
    };
  }
);

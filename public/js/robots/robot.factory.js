(function() {
  "use strict";

  angular
    .module("robots")
    .factory("RobotFactory", [
      "$resource",
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    return $resource("mongodb://" + process.env.MONGODB_URL_RW + "/robotdata/:id", {  id: '@_id' }, {
      update: { method: "PUT" }
    });
  }

  // NOTE TURNED OFF FOR HEROKU
  // function FactoryFunction($resource) {
  //   return $resource("http://localhost:4000/robotdata/:id", {  id: '@_id' }, {
  //     update: { method: "PUT" }
  //   });
  // }

})();

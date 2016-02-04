(function() {
  "use strict";

  angular
    .module("robots")
    .factory("RobotFactory", [
      "$resource",
      FactoryFunction
    ]);

  // NOTE The commented out code was for deploying to Heroku
  // function FactoryFunction($resource) {
  //   return $resource(process.env.MONGODB_URL_RW, {  id: '@_id' }, {
  //     update: { method: "PUT" }
  //   });
  // }

  function FactoryFunction($resource) {
    return $resource("http://localhost:4000/robotdata/:id", {  id: '@_id' }, {
      update: { method: "PUT" }
    });
  }

})();

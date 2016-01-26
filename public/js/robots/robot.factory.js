(function() {
  "use strict";

  angular
    .module("robots")
    .factory("RobotFactory", [
      "$Resource",
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    return $resource("http://localhost:4000/robots");
  }

})();

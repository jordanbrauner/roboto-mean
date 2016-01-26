(function() {
  "use strict";

  angular
    .module("robots")
    .controller("RobotIndexController", [
      "RobotFactory",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory) {
    this.robots = RobotFactory.query();
  }

})();

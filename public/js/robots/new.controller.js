(function() {
  "use strict";

  angular
  .module("robots")
  .controller( "RobotNewController", [
    "RobotFactory",
    "$stateParams",
    ControllerFunction
  ]);

  function ControllerFunction(RobotFactory, $stateParams) {
    this.robot = new RobotFactory();
  }

})();

(function() {
  "use strict";

  angular
    .module("robots")
    .controller("RobotEditController", [
      "RobotFactory",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $stateParams) {
    this.robot = RobotFactory.get({ id: $stateParams.id });
  }

})();

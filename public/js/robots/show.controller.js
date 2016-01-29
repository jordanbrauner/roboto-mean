(function () {
  "use strict";

  angular
    .module("robots")
    .controller("RobotShowController", [
      "RobotFactory",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $stateParams) {
    this.robot = RobotFactory.get({ id: $stateParams.id });
  }

})();

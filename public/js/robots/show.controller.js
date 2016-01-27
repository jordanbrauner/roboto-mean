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
    // console.log(RobotFactory.get({ id: $stateParams.id }));
    this.robot = RobotFactory.get({ id: $stateParams.id });
  }

})();

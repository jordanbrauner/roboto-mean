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
    this.create = function() {
      this.grumble.$save();
    };
  }

})();

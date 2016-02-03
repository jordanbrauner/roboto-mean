(function() {
  "use strict";

  angular
    .module("robots")
    .controller("RobotEditController", [
      "RobotFactory",
      "$state",
      "$stateParams",
      ControllerFunction
    ]);

  function ControllerFunction(RobotFactory, $state, $stateParams) {
    console.log("edit.controller.js: ControllerFunction called to edit or delete new RobotFactory");
    this.robot = RobotFactory.get({ id: $stateParams.id });

    // Delete function
    this.delete = function() {
      console.log("edit.controller.js: Delete function called.");
      this.robot.$delete(function(response) {
        $state.go("robotIndex", {}, { reload: true });
      });
    };
  }

})();

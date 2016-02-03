(function() {
  "use strict";

  angular
  .module("robots")
  .controller( "RobotNewController", [
    "RobotFactory",
    "$state",
    "$stateParams",
    ControllerFunction
  ]);

  function ControllerFunction(RobotFactory, $state, $stateParams) {
    this.robot = new RobotFactory();
    this.create = function() {
      console.log("Create function called");
      this.robot.$save(function(response) {
        console.log("This is the response: " + response);
        $state.go("robotIndex", {}, {reload: true});
      });
    };

    this.formIsVisible = false;
    this.toggleForm = function() {
      console.log("toggleForm called");
      if (this.formIsVisible) {
        this.formIsVisible = false;
      }
      else {
        this.formIsVisible = true;
      }
    };

  }

})();

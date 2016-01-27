(function() {
  "use strict";

  angular
    .module("roboto", [
      "ui.router",
      "robots"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

  function RouterFunction($stateProvider) {
    $stateProvider
      .state("robotIndex", {
        url: "/robots",
        templateUrl: "js/robots/index.html",
        controller: "RobotIndexController",
        controllerAs: "RobotIndexViewModel"
      });
  }

})();

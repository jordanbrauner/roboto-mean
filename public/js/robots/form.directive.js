(function() {
  "use strict";

  angular
  .module("robots")
  .directive("robotForm", function() {
    return {
      templateUrl: 'js/robots/_robot_form.html',
      // ?
      replace: true,
      // ?
      scope: {
        robot: "=",
        formType: "a"
      },
      // ?
      link: function(scope) {
        scope.create = function() {
          scope.robot.$save();
        };
      }
    };
  });
})();

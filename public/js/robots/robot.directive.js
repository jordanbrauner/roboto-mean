(function(){
  angular
    .module('robots')
    .directive('robotShow', function(){
      return {
        templateUrl: "js/robots/_robot_show.html",
        restrict: "A",
        replace: true,
        scope: {
          grumble: "="
        },
        link: function(scope) {
          // scope.name = "Jordan";
          // scope.complementMe = function() {
          //   alert("Hello, you're looking good today");
          // };
        }
      };
    });
})();

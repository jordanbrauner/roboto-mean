(function() {
  "use strict";

  angular
    .module("companies")
    .factory("CompanyFactory", [
      "$resource",
      FactoryFunction
    ]);

  function FactoryFunction($resource) {
    return $resource("http://localhost:4000/companydata/:id");
  }

})();

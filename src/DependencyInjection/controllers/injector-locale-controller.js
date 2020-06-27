const require = function (name) {
  return angular.injector(["ng", "appDependencyInjection"]).get(name);
};

angular
  .module("appDependencyInjection")
  .controller("InjectorLocaleController", [
    "$scope",
    function ($scope) {
      const locale = require("$locale");
      $scope.locale = locale.id;
    },
  ]);

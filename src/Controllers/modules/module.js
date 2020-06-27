angular.module("controllerApp", []);
angular.module("controllerApp").config([
  "$controllerProvider",
  function ($controllerProvider) {
    $controllerProvider.allowGlobals();
  },
]);

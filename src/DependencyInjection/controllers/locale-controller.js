angular
  .module("appDependencyInjection")
  .controller("LocaleController", function ($scope, $locale) {
    $scope.locale = $locale.id;
  });

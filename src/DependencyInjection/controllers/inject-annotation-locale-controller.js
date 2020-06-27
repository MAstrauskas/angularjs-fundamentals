const InjectLocaleController = function (s, l) {
  s.locale = l.id;
};

InjectLocaleController["$inject"] = ["$scope", "$locale"];

angular
  .module("appDependencyInjection")
  .controller("InjectLocaleController", InjectLocaleController);

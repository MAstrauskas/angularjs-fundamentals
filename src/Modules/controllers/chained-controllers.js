angular
  .module("appModules")
  .controller("MessageController", function ($scope) {
    $scope.message = "First message fro one model.";
  })
  .controller("AnotherMessageController", function ($scope) {
    $scope.message = "Second message from another model.";
  });

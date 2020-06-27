function AuthController($scope) {
  $scope.authorized = false;

  $scope.toggle = function () {
    $scope.authorized = !$scope.authorized;
  };
}

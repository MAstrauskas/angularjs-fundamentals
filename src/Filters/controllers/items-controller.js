angular
  .module("appFilters")
  .controller("ItemsController", function ($scope, items) {
    $scope.items = items;
  });

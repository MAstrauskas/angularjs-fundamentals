angular
  .module("appFilters")
  .controller("FilteredItemsController", function (
    $scope,
    items,
    filterFilter
  ) {
    $scope.redItemsCount = filterFilter(items, { color: "red" }).length;
  });

angular
  .module("appServices")
  .controller("FactoryScoreController", function (
    $scope,
    scoreThree,
    randomScore
  ) {
    $scope.score = scoreThree;
    $scope.increment = function () {
      $scope.score.increment();
    };
  });

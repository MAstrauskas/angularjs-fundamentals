angular
  .module("appServices")
  .controller("RandomScoreController", function (
    $scope,
    scoreTwo,
    randomScore
  ) {
    const score = new scoreTwo(randomScore);
    $scope.score = score;
  });

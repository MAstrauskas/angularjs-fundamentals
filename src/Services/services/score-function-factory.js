angular.module("appServices").factory("scoreThree", function (randomScore) {
  let points = randomScore();

  return {
    increment: function () {
      return points++;
    },
    getPoints: function () {
      return points;
    },
  };
});

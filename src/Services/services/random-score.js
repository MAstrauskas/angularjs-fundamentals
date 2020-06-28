angular.module("appServices").value("randomScore", function () {
  return Math.ceil(Math.random() * 10);
});

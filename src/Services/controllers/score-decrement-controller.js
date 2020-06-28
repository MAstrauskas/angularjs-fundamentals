angular.module("appServices").config(function ($provide) {
  $provide.decorator("score", function ($delegate) {
    $delegate.points = 4444;
    return $delegate;
  });
});

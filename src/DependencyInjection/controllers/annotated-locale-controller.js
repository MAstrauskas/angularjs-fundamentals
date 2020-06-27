angular
  .module("appDependencyInjection")
  .controller("AnnotatedLocaleController", [
    "$scope",
    "$locale",
    function (s, l) {
      s.locale = l.id;
    },
  ]);

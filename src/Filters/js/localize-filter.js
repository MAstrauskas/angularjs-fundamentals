angular.module("appFilters").filter("localize", function (locales, $locale) {
  return function (key) {
    const locale = locales[$locale.id] || locales["en-us"];

    return locale[key];
  };
});

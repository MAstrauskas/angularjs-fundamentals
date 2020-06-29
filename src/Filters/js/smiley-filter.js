angular.module("appFilters").filter("smiley", function () {
  return function (text, emoticon) {
    return `${emoticon} ${text} ${emoticon}`;
  };
});

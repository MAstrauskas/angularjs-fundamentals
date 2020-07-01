function HeroDetailController() {
    const ctrl = this;

    ctrl.delete = function() {
        ctrl.onDelete({ hero: ctrl.hero });
    };

    ctrl.update = function(prop, value) {
        ctrl.onUpdate({ hero: ctrl.hero, prop: prop, value: value });
    };
}

angular.module("appComponent").component("heroDetail", {
    templateUrl: "./views/heroDetail.html",
    controller: HeroDetailController,
    bindings: {
        hero: "<",
        onDelete: "&",
        onUpdate: "&",
    },
});
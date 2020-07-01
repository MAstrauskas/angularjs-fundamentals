function HeroListController($scope, $element, $attrs) {
    const ctrl = this;

    ctrl.list = [{
            name: "Batman",
            location: "",
        },
        {
            name: "Robbin Hood",
            location: "Woods",
        },
    ];

    ctrl.updateHero = function(hero, prop, value) {
        hero[prop] = value;
    };

    ctrl.deleteHero = function(hero) {
        const idx = ctrl.list.indexOf(hero);

        if (idx >= 0) ctrl.list.splice(idx, 1);
    };
}

angular.module("appComponent").component("heroList", {
    templateUrl: "./views/heroList.html",
    controller: HeroListController,
});
function EditableFieldController($scope, $element, $attrs) {
    const ctrl = this;
    ctrl.editMode = false;

    ctrl.handleModeChange = function() {
        if (ctrl.editMode) {
            ctrl.onUpdate({ value: ctrl.fieldValue });
            ctrl.fieldValueCopy = ctrl.fieldValue;
        }

        ctrl.editMode = !ctrl.editMode;
    };

    ctrl.reset = function() {
        ctrl.fieldValue = ctrl.fieldValueCopy;
    };

    ctrl.$onInit = function() {
        ctrl.fieldValueCopy = ctrl.fieldValue; // so we can reset it later

        if (!ctrl.fieldType) {
            ctrl.fieldType = "text";
        }
    };
}

angular.module("appComponent").component("editableField", {
    templateUrl: "./views/editableField.html",
    controller: EditableFieldController,
    bindings: {
        fieldValue: "<",
        fieldType: "@?",
        onUpdate: "&",
    },
});
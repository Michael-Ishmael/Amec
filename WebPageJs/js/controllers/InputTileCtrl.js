/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var ListInputTileCtrl = (function () {
        function ListInputTileCtrl($scope, vs) {
            this.$scope = $scope;
            this.vs = vs;
            this.message = "List testy";
            this.init();
        }
        ListInputTileCtrl.prototype.init = function () {
            this.cell = this.$scope.cell;
            this.step = this.$scope.step;
        };
        ListInputTileCtrl.prototype.close = function () {
            this.vs.resetView();
        };
        ListInputTileCtrl.prototype.getColorClass = function (prefix, step) {
            return prefix + "-" + step.color + " ";
        };
        return ListInputTileCtrl;
    }());
    ListInputTileCtrl.$inject = ["$scope", "viewService"];
    aif.ListInputTileCtrl = ListInputTileCtrl;
})(aif || (aif = {}));

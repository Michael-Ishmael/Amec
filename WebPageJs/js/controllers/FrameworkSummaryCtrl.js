/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkSummaryCtrl = (function () {
        function FrameworkSummaryCtrl($window, frameworkRepository, vs) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
            this.vs = vs;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.message = "Hoi hoi";
            this.init();
        }
        FrameworkSummaryCtrl.prototype.init = function () {
            this.steps = this.frameworkRepository.get();
            this.rows = this.setRowsFromSteps(this.steps);
        };
        FrameworkSummaryCtrl.prototype.setRowsFromSteps = function (steps) {
            var rowObj = steps.reduce(function (grps, s) {
                (grps[s["row"]] = grps[s["row"]] || []).push(s);
                return grps;
            }, {});
            var rowCount = Math.max.apply(Math, steps.map(function (s) { return s.row; }));
            var rows = [];
            for (var i = 0; i < rowCount; i++) {
                var rowArray = rowObj[i + 1];
                var row = new aif.WorkflowRow(rowArray);
                rows.push(row);
            }
            return rows;
        };
        return FrameworkSummaryCtrl;
    }());
    FrameworkSummaryCtrl.$inject = ["$window",
        "frameworkRepository",
        "viewService"
    ];
    aif.FrameworkSummaryCtrl = FrameworkSummaryCtrl;
})(aif || (aif = {}));

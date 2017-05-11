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
            this.summary = null;
            this.sectionOne = null;
            this.sectionTwo = null;
            this.sectionThree = null;
            this.message = "Hoi hoi";
            this.init();
        }
        FrameworkSummaryCtrl.prototype.init = function () {
            var _this = this;
            this.steps = this.frameworkRepository.get();
            this.rows = this.setRowsFromSteps(this.steps);
            this.frameworkRepository.getSummary().then(function (r) {
                _this.summary = r;
                _this.sectionOne = _this.summary.rows[0].sections[0];
                _this.sectionTwo = _this.summary.rows[1].sections[0];
                _this.sectionThree = _this.summary.rows[1].sections[1];
            });
        };
        FrameworkSummaryCtrl.prototype.getColorClass = function (prefix, color) {
            if (color === "red" && prefix.indexOf("light") > -1) {
                return prefix + "pale_grey";
            }
            return prefix + color;
        };
        FrameworkSummaryCtrl.prototype.getWidthClass = function (group, inside) {
            if (group.steps.length == 2) {
                return "col-md-6";
            }
            if (inside)
                return "col-md-12";
            return "col-md-3";
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

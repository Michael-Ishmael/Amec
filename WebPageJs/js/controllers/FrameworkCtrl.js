/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkCtrl = (function () {
        function FrameworkCtrl($window, frameworkRepository, vs) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
            this.vs = vs;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
            this.steps = frameworkRepository.get();
            this.rows = aif.FrameworkCtrl.setRowsFromSteps(this.steps);
        }
        FrameworkCtrl.prototype.getColorClass = function (prefix, step) {
            return prefix + "-" + step.color + " ";
        };
        FrameworkCtrl.prototype.handleStepClick = function (step) {
            if (!step.isSubmit) {
                this.switchToEditMode(step);
            }
            //submit
            return;
        };
        FrameworkCtrl.prototype.switchToEditMode = function (step) {
            this.vs.showEdit();
            this.editMode = true;
            step.showInput = true;
            this.editStep = step;
        };
        FrameworkCtrl.prototype.isInSameStep = function (scp, arg2) {
            console.log(arg2);
            return false;
        };
        FrameworkCtrl.prototype.clearEditMode = function () {
            this.vs.resetView();
            this.editMode = false;
            this.editStep.showInput = false;
            this.editStep.inputRow.forEach(function (c) {
                if (c.cellType === aif.WorkflowCellType.Info) {
                    var i = c;
                    i.visible = false;
                }
            });
            this.editStep = null;
        };
        FrameworkCtrl.prototype.isInfo = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Info)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.isEmpty = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Empty)
                return true;
            return false;
        };
        FrameworkCtrl.prototype.isInput = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Input) {
                var inputCell = cell;
                if (inputCell.items[0].inputStyle !== aif.InputStyle.NumberedInputs)
                    return true;
            }
            return false;
        };
        FrameworkCtrl.prototype.isListInput = function (cell) {
            if (cell.cellType == aif.WorkflowCellType.Input) {
                var inputCell = cell;
                if (inputCell.items[0].inputStyle === aif.InputStyle.NumberedInputs)
                    return true;
            }
            return false;
        };
        FrameworkCtrl.prototype.showInfoCell = function (inputItem, infoCell) {
            //e.stopPropagation();
            if (inputItem && infoCell) {
                infoCell.leadText = inputItem.leadText;
                infoCell.remainText = inputItem.remainText;
                infoCell.visible = true;
            }
        };
        FrameworkCtrl.prototype.hideInfoCell = function () {
            if (this.infoCell) {
                this.infoCell.visible = false;
                this.infoCell = null;
            }
        };
        FrameworkCtrl.setRowsFromSteps = function (steps) {
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
        return FrameworkCtrl;
    }());
    FrameworkCtrl.$inject = ["$window",
        "frameworkRepository",
        "viewService"
    ];
    aif.FrameworkCtrl = FrameworkCtrl;
})(aif || (aif = {}));

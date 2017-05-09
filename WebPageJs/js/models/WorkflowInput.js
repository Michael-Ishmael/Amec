/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    var InputStyle;
    (function (InputStyle) {
        InputStyle[InputStyle["TextArea"] = 1] = "TextArea";
        InputStyle[InputStyle["NumberedInputs"] = 2] = "NumberedInputs";
        InputStyle[InputStyle["LinkedInputs"] = 3] = "LinkedInputs";
        InputStyle[InputStyle["BlankInputs"] = 4] = "BlankInputs";
        InputStyle[InputStyle["WholeStep"] = 5] = "WholeStep";
    })(InputStyle = aif.InputStyle || (aif.InputStyle = {}));
    var WorkflowInputItem = (function () {
        function WorkflowInputItem(heading, subHeading, leadText, remainText, inputStyle, inputSize) {
            this.heading = heading;
            this.subHeading = subHeading;
            this.leadText = leadText;
            this.remainText = remainText;
            this.inputStyle = inputStyle;
            this.inputSize = inputSize;
        }
        WorkflowInputItem.fromData = function (data) {
            return new WorkflowInputItem(data.heading, data.subHeading, data.leadText, data.remainText, data.inputStyle, data.inputSize);
        };
        return WorkflowInputItem;
    }());
    aif.WorkflowInputItem = WorkflowInputItem;
    var WorkflowInput = (function () {
        function WorkflowInput(stepIndex, row, colSpan) {
            this.stepIndex = stepIndex;
            this.row = row;
            this.colSpan = colSpan;
        }
        return WorkflowInput;
    }());
    aif.WorkflowInput = WorkflowInput;
    var WorkflowInputCell = (function () {
        function WorkflowInputCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Input;
            this.visible = false;
        }
        WorkflowInputCell.prototype.showInfo = function (item) {
            if (!this.infoCell)
                return;
            this.infoCell.leadText = item.leadText;
            this.infoCell.remainText = item.remainText;
        };
        return WorkflowInputCell;
    }());
    aif.WorkflowInputCell = WorkflowInputCell;
    var WorkflowInfoCell = (function () {
        function WorkflowInfoCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Info;
            this.visible = false;
        }
        return WorkflowInfoCell;
    }());
    aif.WorkflowInfoCell = WorkflowInfoCell;
    var WorkflowEmptyCell = (function () {
        function WorkflowEmptyCell(row, colSpan) {
            this.row = row;
            this.colSpan = colSpan;
            this.cellType = aif.WorkflowCellType.Empty;
        }
        return WorkflowEmptyCell;
    }());
    aif.WorkflowEmptyCell = WorkflowEmptyCell;
})(aif || (aif = {}));

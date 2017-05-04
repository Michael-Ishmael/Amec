/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    (function (InputStyle) {
        InputStyle[InputStyle["TextArea"] = 1] = "TextArea";
        InputStyle[InputStyle["NumberedInputs"] = 2] = "NumberedInputs";
        InputStyle[InputStyle["LinkedInputs"] = 3] = "LinkedInputs";
        InputStyle[InputStyle["BlankInputs"] = 4] = "BlankInputs";
    })(aif.InputStyle || (aif.InputStyle = {}));
    var InputStyle = aif.InputStyle;
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
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    (function (WorkflowCellType) {
        WorkflowCellType[WorkflowCellType["Step"] = 0] = "Step";
        WorkflowCellType[WorkflowCellType["Input"] = 1] = "Input";
        WorkflowCellType[WorkflowCellType["Info"] = 2] = "Info";
        WorkflowCellType[WorkflowCellType["Empty"] = 3] = "Empty";
    })(aif.WorkflowCellType || (aif.WorkflowCellType = {}));
    var WorkflowCellType = aif.WorkflowCellType;
    var WorkflowStep = (function () {
        function WorkflowStep(title, index, row, colSpan, color, isSubmit) {
            this.title = title;
            this.index = index;
            this.row = row;
            this.colSpan = colSpan;
            this.color = color;
            this.isSubmit = isSubmit;
            this.inputRow = null;
            this.cellType = WorkflowCellType.Step;
        }
        WorkflowStep.prototype.loadInput = function (input) {
            if (this.inputRow) {
                for (var _i = 0, _a = this.inputRow; _i < _a.length; _i++) {
                    var cell = _a[_i];
                    if (cell.cellType === WorkflowCellType.Input) {
                        var inputCell = cell;
                        inputCell.items = input.items;
                    }
                }
            }
        };
        WorkflowStep.fromData = function (data) {
            var step = new WorkflowStep(data.title, data.index, data.row, data.colSpan, data.color, data.isSubmit === true);
            if (data.inputRow) {
                step.inputRow = [];
                var infoCell_1;
                var inputCell_1;
                data.inputRow.forEach(function (c) {
                    switch (c.cellType) {
                        case WorkflowCellType.Empty:
                            step.inputRow.push(new aif.WorkflowEmptyCell(c.row, c.colSpan));
                            break;
                        case WorkflowCellType.Info:
                            infoCell_1 = new aif.WorkflowInfoCell(c.row, c.colSpan);
                            step.inputRow.push(infoCell_1);
                            break;
                        case WorkflowCellType.Input:
                            inputCell_1 = new aif.WorkflowInputCell(c.row, c.colSpan);
                            step.inputRow.push(inputCell_1);
                            break;
                    }
                });
                if (infoCell_1 && inputCell_1)
                    inputCell_1.infoCell = infoCell_1;
            }
            return step;
        };
        return WorkflowStep;
    }());
    aif.WorkflowStep = WorkflowStep;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var WorkflowRow = (function () {
        function WorkflowRow(cells) {
            this.cells = cells;
        }
        return WorkflowRow;
    }());
    aif.WorkflowRow = WorkflowRow;
})(aif || (aif = {}));
/// <reference path="../_all.ts" />
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkRepository = (function () {
        function FrameworkRepository() {
        }
        FrameworkRepository.prototype.get = function () {
            var steps = this.getRawStepArray().map(function (s) { return aif.WorkflowStep.fromData(s); });
            var inputs = this.getRawInputArray();
            inputs.forEach(function (i) {
                steps.filter(function (s) { return s.index === i.stepIndex; }).forEach(function (s) { return s.loadInput(i); });
            });
            return steps;
        };
        FrameworkRepository.prototype.getRawStepArray = function () {
            var steps = [
                {
                    title: 'Objectives',
                    index: 1,
                    row: 1,
                    colSpan: 1,
                    color: "red",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 1,
                            colSpan: 1
                        }
                    ]
                },
                {
                    title: 'Inputs',
                    index: 2,
                    row: 1,
                    colSpan: 1,
                    color: "yellow",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Empty,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 1,
                            colSpan: 1
                        },
                    ]
                },
                {
                    title: 'Activity',
                    index: 3,
                    row: 1,
                    colSpan: 1,
                    color: "green",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 1,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 1,
                            colSpan: 2
                        }
                    ]
                },
                {
                    title: 'Outputs',
                    index: 4,
                    row: 2,
                    colSpan: 1,
                    color: "light_blue",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 2
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 2,
                            colSpan: 1
                        }
                    ]
                },
                {
                    title: 'Out-takes',
                    index: 5,
                    row: 2,
                    colSpan: 1,
                    color: "dark_blue",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Empty,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 2,
                            colSpan: 1
                        }
                    ]
                },
                {
                    title: 'Outcomes',
                    index: 6,
                    row: 2,
                    colSpan: 1,
                    color: "dark_blue",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Empty,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Info,
                            row: 2,
                            colSpan: 1
                        },
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 1
                        },
                    ]
                },
                {
                    title: 'Impact',
                    index: 7,
                    row: 3,
                    colSpan: 2,
                    color: "purple",
                    cellType: aif.WorkflowCellType.Step,
                    inputRow: [
                        {
                            cellType: aif.WorkflowCellType.Input,
                            row: 2,
                            colSpan: 2
                        },
                    ]
                },
                {
                    title: 'SUBMIT',
                    index: 8,
                    row: 3,
                    colSpan: 1,
                    color: "black",
                    isSubmit: true,
                    cellType: aif.WorkflowCellType.Step
                }
            ];
            return steps;
        };
        FrameworkRepository.prototype.getRawInputArray = function () {
            return [
                {
                    stepIndex: 1,
                    items: [
                        {
                            heading: "Organizational Objectives",
                            subHeading: "What are the broad objectives or your organisation?",
                            leadText: "Organizational Objectives",
                            remainText: "are usually published in the organization’s business plan or strategy. They are often long-term and require more than communication. Identify which organizational objectives your communication program can support.",
                            inputStyle: aif.InputStyle.TextArea,
                            inputSize: 500
                        },
                        {
                            heading: "Communications Objectives",
                            subHeading: "What are your communication objectives for this program?",
                            leadText: "Communications Objectives",
                            remainText: "are the specific objectives that your communication program, campaign, or project is designed to achieve. Your communication objectives must support one or more organizational objectives; identify which one\'s.</p><p>​Make sure your communications are SMART – Specific, Measurable, Achievable, Relevant and Time bound. Clearly define them and set targets for what you are looking to achieve",
                            inputStyle: aif.InputStyle.TextArea,
                            inputSize: 500
                        }
                    ]
                },
                {
                    stepIndex: 2,
                    items: [
                        {
                            heading: "Target Audience",
                            subHeading: "Define your key target audiences",
                            leadText: "Target Audience",
                            remainText: "define clearly with which audiences you are looking to communicate. Be as specific as possible. The more refined your audience definition, the more focussed your targeting can be. Think demographics, socio-economic data and media consumption habits.",
                            inputStyle: aif.InputStyle.NumberedInputs,
                            inputSize: 5
                        },
                        {
                            heading: "Strategy and other inputs",
                            subHeading: "Highlight your strategic plan and other 'inputs'",
                            leadText: "Strategy and other inputs",
                            remainText: "define the plan to reach your key target audiences and crucially achieve the SMART communications objectives and pre-defined targets that you have set. What are the key highlights from your plan? ​",
                            inputStyle: aif.InputStyle.NumberedInputs,
                            inputSize: 5
                        }
                    ]
                }
            ];
        };
        return FrameworkRepository;
    }());
    aif.FrameworkRepository = FrameworkRepository;
})(aif || (aif = {}));
/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkCtrl = (function () {
        function FrameworkCtrl($window, frameworkRepository) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
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
                return;
            }
            //submit
            return;
        };
        FrameworkCtrl.prototype.switchToEditMode = function (step) {
            this.editMode = true;
            step.showInput = true;
            this.editStep = step;
        };
        FrameworkCtrl.prototype.isInSameStep = function (scp, arg2) {
            console.log(arg2);
            return false;
        };
        FrameworkCtrl.prototype.clearEditMode = function () {
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
            if (cell.cellType == aif.WorkflowCellType.Input)
                return true;
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
        FrameworkCtrl.$inject = ["$window",
            "frameworkRepository"
        ];
        return FrameworkCtrl;
    }());
    aif.FrameworkCtrl = FrameworkCtrl;
})(aif || (aif = {}));
/// <reference path='_all.ts' />
/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
var aif;
(function (aif_1) {
    'use strict';
    var aif = angular.module('aif', ['tw.directives.clickOutside'])
        .service('frameworkRepository', aif_1.FrameworkRepository)
        .controller('frameworkCtrl', aif_1.FrameworkCtrl);
})(aif || (aif = {}));
/// <reference path='libs/jquery/jquery.d.ts' />
/// <reference path='libs/angular/angular.d.ts' />
/// <reference path='models/WorkflowInput.ts' />
/// <reference path='models/WorkflowStep.ts' />
/// <reference path='models/WorkflowRow.ts' />
/// <reference path='interfaces/IFrameworkRepository.ts' />
/// <reference path="services/FrameworkRepository.ts" />
/// <reference path="controllers/FrameworkCtrl.ts" />
/// <reference path='Application.ts' /> 
//# sourceMappingURL=Application.js.map
/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var FrameworkRepository = (function () {
        function FrameworkRepository($timeout, $rootScope, $cookies) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            this.frameworkSteps = null;
            this.frameworkSummary = null;
        }
        FrameworkRepository.prototype.get = function () {
            if (this.frameworkSteps)
                return this.frameworkSteps;
            var steps = this.getRawStepArray().map(function (s) { return aif.WorkflowStep.fromData(s); });
            var inputs = this.getRawInputArray();
            inputs.forEach(function (i) {
                steps.filter(function (s) { return s.index === i.stepIndex; }).forEach(function (s) { return s.loadInput(i); });
            });
            this.frameworkSteps = steps;
            return steps;
        };
        FrameworkRepository.prototype.getSummary = function () {
            var _this = this;
            return this.$timeout(function () {
                if (_this.frameworkSummary != null)
                    return _this.frameworkSummary;
                var steps = _this.get();
                var summary = new aif.AifSummary();
                var data = _this.getRawSummaryArray();
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var dataRow = data_1[_i];
                    var summaryRow = new aif.AifSummaryRow();
                    for (var _a = 0, _b = dataRow.sections; _a < _b.length; _a++) {
                        var dataSection = _b[_a];
                        var summarySection = new aif.AifSummarySection(dataSection.heading);
                        summarySection.width = dataSection.width;
                        for (var _c = 0, _d = dataSection.groups; _c < _d.length; _c++) {
                            var dataGroup = _d[_c];
                            var summaryGroup = new aif.AifSummaryGroup(dataGroup.heading, dataGroup.color);
                            for (var _e = 0, _f = dataGroup.entries; _e < _f.length; _e++) {
                                var dataEntry = _f[_e];
                                var entry = findEntry(dataEntry.stepId, dataEntry.stepEntryIndex, dataEntry.headingOverride);
                                if (entry)
                                    summaryGroup.steps.push(entry);
                            }
                            summarySection.groups.push(summaryGroup);
                        }
                        summaryRow.sections.push(summarySection);
                    }
                    summary.rows.push(summaryRow);
                }
                _this.frameworkSummary = summary;
                return summary;
                function findEntry(stepIndex, entryIndex, headingOverride) {
                    var matches = steps.filter(function (s) { return s.index == stepIndex; });
                    if (matches.length) {
                        var step = matches[0];
                        if (entryIndex && step.inputEntries.length >= entryIndex) {
                            var iEntry = step.inputEntries[entryIndex - 1];
                            return iEntry.frameworkEntry;
                        }
                        var heading = headingOverride ? headingOverride : step.title;
                        var summaryEntry = new aif.AifFrameworkStep(heading);
                        summaryEntry.entries = step.inputEntries.map(function (e) { return e.frameworkEntry; });
                        return summaryEntry;
                    }
                    return null;
                }
            }, 1);
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
                    title: 'Activities',
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
                    cellType: aif.WorkflowCellType.Step,
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
                },
                {
                    stepIndex: 3,
                    items: [
                        {
                            heading: "List all the key activities that you will or did undertake.",
                            subHeading: null,
                            leadText: "Activities",
                            remainText: " include:<br><br><ul><li>Formative research (e.g., surveys, focus groups, pre-testing)</li><li>Planning (including SWOT analysis, PEST or PESTLE, etc.)</li>​<li>Design of materials</li><li>Writing and production of communication materials, events, etc.</li></ul>",
                            inputStyle: aif.InputStyle.LinkedInputs,
                            inputSize: 5
                        }
                    ]
                }
            ];
        };
        FrameworkRepository.prototype.getRawSummaryArray = function () {
            return [
                {
                    sections: [
                        {
                            heading: "Preparation",
                            groups: [
                                {
                                    heading: "Align Objectives",
                                    color: "red",
                                    entries: [
                                        {
                                            entryType: "stepItem",
                                            stepId: 1,
                                            stepEntryIndex: 1
                                        },
                                        {
                                            entryType: "stepItem",
                                            stepId: 1,
                                            stepEntryIndex: 2
                                        }
                                    ]
                                },
                                {
                                    heading: "Plan & Set Targets",
                                    color: "yellow",
                                    entries: [
                                        {
                                            entryType: "stepItem",
                                            stepId: 2,
                                            stepEntryIndex: 1
                                        },
                                        {
                                            entryType: "stepItem",
                                            stepId: 2,
                                            stepEntryIndex: 2,
                                            headingOverride: "Strategy"
                                        }
                                    ]
                                }
                            ],
                            width: 1
                        }
                    ],
                    maxRowHeight: 176
                },
                {
                    sections: [
                        {
                            heading: "Implementation",
                            groups: [
                                {
                                    heading: "Implement",
                                    color: "green",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 3,
                                        }
                                    ]
                                }
                            ],
                            width: .25
                        },
                        {
                            heading: "Measurement & Insights",
                            groups: [
                                {
                                    heading: "Measure Activity",
                                    color: "light_blue",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 4,
                                        }
                                    ]
                                },
                                {
                                    heading: "Audience Response & Effects",
                                    color: "dark_blue",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 5,
                                        },
                                        {
                                            entryType: "step",
                                            stepId: 6,
                                        }
                                    ]
                                },
                                {
                                    heading: "Organisation & Stakeholder Effects",
                                    color: "purple",
                                    entries: [
                                        {
                                            entryType: "step",
                                            stepId: 7,
                                        }
                                    ]
                                },
                            ],
                            width: .75
                        }
                    ],
                    maxRowHeight: 300
                }
            ];
        };
        return FrameworkRepository;
    }());
    FrameworkRepository.$inject = ["$timeout", "$rootScope", '$cookies'];
    aif.FrameworkRepository = FrameworkRepository;
})(aif || (aif = {}));

/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class FrameworkRepository implements IFrameworkRepository {

    static $inject = ["$timeout", "$rootScope", '$cookies'];

    public frameworkSteps: Array<WorkflowStep> = null;
    public frameworkSummary: AifSummary = null;

    constructor(private $timeout: ng.ITimeoutService, private $rootScope: ng.IRootScopeService, private $cookies: ng.cookies.ICookiesService) {

    }

    get(): WorkflowStep[] {

      if (this.frameworkSteps) return this.frameworkSteps;

      let steps = this.getRawStepArray().map(s => WorkflowStep.fromData(s));
      let inputs = this.getRawInputArray();

      inputs.forEach(i => {
        steps.filter(s => s.index === i.stepIndex).forEach(s => s.loadInput(i));
      });

      this.frameworkSteps = steps;

      return steps;
    }

    getSummary(): ng.IPromise<AifSummary> {

      return this.$timeout(() => {

        if (this.frameworkSummary != null) return this.frameworkSummary;

        let steps = this.get();

        let summary: AifSummary = new AifSummary();

        let data = this.getRawSummaryArray();

        for (let dataRow of data) {
          let summaryRow = new AifSummaryRow();

          for (let dataSection of dataRow.sections) {

            let summarySection = new AifSummarySection(dataSection.heading);
            summarySection.width = dataSection.width;

            for (let dataGroup of dataSection.groups) {

              let summaryGroup = new AifSummaryGroup(dataGroup.heading, dataGroup.color);

              for (let dataEntry of dataGroup.entries) {

                let entry = findEntry(dataEntry.stepId, dataEntry.stepEntryIndex, dataEntry.headingOverride);
                if(entry) summaryGroup.steps.push(entry)

              }

              summarySection.groups.push(summaryGroup);

            }

            summaryRow.sections.push(summarySection);
          }

          summary.rows.push(summaryRow)
        }
        this.frameworkSummary = summary;
        return summary;

        function findEntry(stepIndex: number, entryIndex?: number, headingOverride?: string): IAifFrameworkEntry {
          let matches = steps.filter(s => s.index == stepIndex);
          if (matches.length) {
            let step = matches[0];
            if (entryIndex && step.inputEntries.length >= entryIndex) {
              let iEntry = step.inputEntries[entryIndex - 1];
              return iEntry.frameworkEntry;
            }
            let heading = headingOverride ? headingOverride : step.title;
            let summaryEntry = new AifFrameworkStep(heading);
            summaryEntry.entries = step.inputEntries.map(e => e.frameworkEntry);

            return summaryEntry;
          }
          return null;
        }


      }, 1);

    }

    private getRawStepArray(): IWorkflowStep[] {

      let steps = [
        {
          title: 'Objectives',
          index: 1,
          row: 1,
          colSpan: 1,
          color: "red",
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Input,
              row: 1,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Info,
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
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Empty,
              row: 1,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Input,
              row: 1,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Info,
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
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Info,
              row: 1,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Input,
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
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Input,
              row: 2,
              colSpan: 2
            },
            {
              cellType: WorkflowCellType.Info,
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
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Empty,
              row: 2,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Input,
              row: 2,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Info,
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
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Empty,
              row: 2,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Info,
              row: 2,
              colSpan: 1
            },
            {
              cellType: WorkflowCellType.Input,
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
          cellType: WorkflowCellType.Step,
          inputRow: [
            {
              cellType: WorkflowCellType.Input,
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
          cellType: WorkflowCellType.Step,
        }
      ];

      return steps as IWorkflowStep[];

    }

    private getRawInputArray(): IWorkflowInput[] {

      return [
        {
          stepIndex: 1,
          items: [
            {
              heading: "Organizational Objectives",
              subHeading: "What are the broad objectives or your organisation?",
              leadText: "Organizational Objectives",
              remainText: "are usually published in the organization’s business plan or strategy. They are often long-term and require more than communication. Identify which organizational objectives your communication program can support.",
              inputStyle: InputStyle.TextArea,
              inputSize: 500
            },
            {
              heading: "Communications Objectives",
              subHeading: "What are your communication objectives for this program?",
              leadText: "Communications Objectives",
              remainText: "are the specific objectives that your communication program, campaign, or project is designed to achieve. Your communication objectives must support one or more organizational objectives; identify which one\'s.</p><p>​Make sure your communications are SMART – Specific, Measurable, Achievable, Relevant and Time bound. Clearly define them and set targets for what you are looking to achieve",
              inputStyle: InputStyle.TextArea,
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
              inputStyle: InputStyle.NumberedInputs,
              inputSize: 5
            },
            {
              heading: "Strategy and other inputs",
              subHeading: "Highlight your strategic plan and other 'inputs'",
              leadText: "Strategy and other inputs",
              remainText: "define the plan to reach your key target audiences and crucially achieve the SMART communications objectives and pre-defined targets that you have set. What are the key highlights from your plan? ​",
              inputStyle: InputStyle.NumberedInputs,
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
              inputStyle: InputStyle.LinkedInputs,
              inputSize: 5
            }
          ]
        }
      ];

    }

    private getRawSummaryArray(): Array<IAifSummaryRowData> {

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

    }

  }

}


/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class FrameworkRepository implements IFrameworkRepository
   {

    get () : WorkflowStep[] {
      let steps = this.getRawStepArray().map(s => WorkflowStep.fromData(s));
      let inputs = this.getRawInputArray();

      inputs.forEach(i => {
        steps.filter(s => s.index === i.stepIndex).forEach(s => s.loadInput(i));
      });

      return steps;
    }

    private getRawStepArray(): IWorkflowStep[]{

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
          title: 'Activity',
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

    private getRawInputArray(): IWorkflowInput[]{

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
        }
      ];

    }

  }

}


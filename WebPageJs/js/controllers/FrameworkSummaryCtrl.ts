/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class FrameworkSummaryCtrl {

    public steps: WorkflowStep[];
    public rows: WorkflowRow[];
    public editMode: boolean = false;
    public editStep: WorkflowStep = null;
    public infoCell: WorkflowInfoCell = null;

    public message: string = "Hoi hoi";

    public static $inject = ["$window",
      "frameworkRepository",
      "viewService"
    ];

    constructor(private $window: ng.IWindowService, private frameworkRepository: IFrameworkRepository, public vs: ViewService) {

      this.init();

    }

    private init(): void {
      this.steps = this.frameworkRepository.get();
      this.rows = this.setRowsFromSteps(this.steps);
    }

    private setRowsFromSteps(steps: IWorkflowStep[]):WorkflowRow[] {
      let rowObj = steps.reduce(function(grps, s){
        (grps[s["row"]] = grps[s["row"]] || []).push(s);
        return grps;
      }, {});

      let rowCount = Math.max.apply(Math, steps.map(function(s){return s.row;}));
      let rows = [];

      for (let i = 0; i < rowCount; i++) {
        let rowArray = rowObj[i + 1];
        let row = new WorkflowRow(rowArray);
        rows.push(row);
      }
      return rows;
    }


  }

}


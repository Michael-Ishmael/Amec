/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class FrameworkSummaryCtrl {

    public steps: WorkflowStep[];
    public rows: WorkflowRow[];
    public editMode: boolean = false;
    public editStep: WorkflowStep = null;
    public infoCell: WorkflowInfoCell = null;
    public summary: AifSummary = null;

    public sectionOne: AifSummarySection = null;
    public sectionTwo: AifSummarySection = null;
    public sectionThree: AifSummarySection = null;

    public message: string = "Hoi hoi";

    public static $inject = ["$window",
      "frameworkRepository",
      "viewService"
    ];

    constructor(private $window: ng.IWindowService, private frameworkRepository: FrameworkRepository, public vs: ViewService) {

      this.init();

    }

    private init(): void {
      this.steps = this.frameworkRepository.get();
      this.rows = this.setRowsFromSteps(this.steps);
      this.frameworkRepository.getSummary().then(
          r => {
            this.summary = r;
            this.sectionOne = this.summary.rows[0].sections[0];
            this.sectionTwo = this.summary.rows[1].sections[0];
            this.sectionThree = this.summary.rows[1].sections[1];
          }
      )
    }

    public getColorClass(prefix:string, color:string):string{

      if(color === "red" && prefix.indexOf("light") > -1){
        return prefix + "pale_grey";
      }
      return prefix + color;
    }

    public getWidthClass(group:AifSummaryGroup, inside:boolean):string {

      if(group.steps.length == 2){
        return "col-md-6";
      }
      if(inside) return "col-md-12";
      return "col-md-3";
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


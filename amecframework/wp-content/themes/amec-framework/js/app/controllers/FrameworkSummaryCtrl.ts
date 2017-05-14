

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

    public static $inject = ["$sce",
      "frameworkRepository",
      "viewService"
    ];

    constructor(private $sce: ng.ISCEService, private frameworkRepository: FrameworkRepository, public vs: ViewService) {

      this.init();

    }

    private init(): void {

      this.frameworkRepository.getSummary().then(
          r => {
            this.summary = r;
            this.sectionOne = this.summary.rows[0].sections[0];
            this.sectionTwo = this.summary.rows[1].sections[0];
            this.sectionThree = this.summary.rows[1].sections[1];
          }
      )
    }

    public sanitize(html:string):any{
      return this.$sce.trustAsHtml(html)
    }

    public getColorClass(prefix:string, color:string):string{

      if(color === "red" && prefix.indexOf("light") > -1){
        return prefix + "pale_grey";
      }
      return prefix + color;
    }

    public getWidthClass(steps:number, totalSize:number = 1, inside:boolean = false):string {

      let unit = 12 / totalSize;
      if(!inside) unit = unit * steps;

      return "col-md-" + unit.toString();
    }



  }

}


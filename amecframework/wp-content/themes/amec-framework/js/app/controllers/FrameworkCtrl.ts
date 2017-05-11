

module aif {
  'use strict';

  export class FrameworkCtrl {

    public steps: WorkflowStep[];
    public rows: WorkflowRow[];
    public editMode: boolean = false;
    public editStep: WorkflowStep = null;
    public infoCell: WorkflowInfoCell = null;

    public static $inject = ["$window",
      "frameworkRepository",
      "viewService"
    ];

    constructor(private $window:ng.IWindowService, private frameworkRepository: IFrameworkRepository, public vs:ViewService) {

      this.steps = frameworkRepository.get();
      this.rows = aif.FrameworkCtrl.setRowsFromSteps(this.steps);

    }

    public getColorClass(prefix:string, step:WorkflowStep):string{
      return prefix + "-" + step.color + " ";
    }

    public handleStepClick(step:WorkflowStep):void{
      if(!step.isSubmit){
        this.switchToEditMode(step);
      }
      //submit
      return
    }


    private switchToEditMode(step:WorkflowStep):void{
      this.vs.showEdit();
      this.editMode = true;
      step.showInput = true;
      this.editStep = step;
    }

    public isInSameStep(scp, arg2): boolean {
      console.log(arg2);
      return false;
    }

    public clearEditMode():void {
      this.vs.resetView();
      this.editMode = false;
      this.editStep.showInput = false;
      this.editStep.inputRow.forEach(c => {
        if(c.cellType === WorkflowCellType.Info) {
          let i = c as WorkflowInfoCell;
          i.visible =false;
        }});
      this.editStep = null;
    }

    public isInfo(cell: IWorkflowGridCell):boolean {
      if(cell.cellType == WorkflowCellType.Info)
        return true;
      return false;
    }

    public isEmpty(cell: IWorkflowGridCell):boolean {
      if (cell.cellType == WorkflowCellType.Empty)
        return true;
      return false;
    }

    public isInput(cell: IWorkflowGridCell):boolean {
      if(cell.cellType == WorkflowCellType.Input){
        let inputCell = cell as WorkflowInputCell;
        if(inputCell.items[0].inputStyle !== InputStyle.NumberedInputs)
          return true;
      }
      return false;
    }


    public isListInput(cell: IWorkflowGridCell):boolean {
      if(cell.cellType == WorkflowCellType.Input){
        let inputCell = cell as WorkflowInputCell;
        if(inputCell.items[0].inputStyle === InputStyle.NumberedInputs)
          return true;
      }

      return false;
    }


    public showInfoCell(inputItem: IWorkflowInputItem, infoCell: WorkflowInfoCell):void{
      //e.stopPropagation();
      if(inputItem && infoCell){
        infoCell.leadText = inputItem.leadText;
        infoCell.remainText = inputItem.remainText;
        infoCell.visible = true;
      }
    }

    public hideInfoCell(){
      if(this.infoCell){
        this.infoCell.visible = false;
        this.infoCell = null;
      }
    }



    private static setRowsFromSteps(steps: IWorkflowStep[]):WorkflowRow[] {
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


/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class FrameworkCtrl {

    public steps: WorkflowStep[];
    public rows: WorkflowRow[];
    public editMode: boolean = false;
    public editStep: WorkflowStep = null;
    public infoCell: WorkflowInfoCell = null;

    public static $inject = [
      "frameworkRepository"
    ];

    constructor(private frameworkRepository: IFrameworkRepository) {

      this.steps = frameworkRepository.get();
      this.rows = aif.FrameworkCtrl.setRowsFromSteps(this.steps);

    }

    public getColorClass(prefix:string, step:WorkflowStep):string{
      return prefix + "-" + step.color + " ";
    }

    public handleStepClick(step:WorkflowStep):void{
      if(!step.isSubmit){
        this.switchToEditMode(step);
        return;
      }
      //submit
      return
    }

    private switchToEditMode(step:WorkflowStep):void{
      this.editMode = true;
      step.showInput = true;
      this.editStep = step;
    }

    public clearEditMode():void {
      this.editMode = false;
      this.editStep.showInput = false;
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
      if(cell.cellType == WorkflowCellType.Input)
        return true;
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


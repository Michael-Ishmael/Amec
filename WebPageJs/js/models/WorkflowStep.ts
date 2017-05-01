/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export enum WorkflowCellType {
    Step = 0,
    Input = 1,
    Info = 2,
    Empty = 3
  }

  export interface IWorkflowGridCell {
    row: number,
    colSpan: number,
    cellType: WorkflowCellType
  }

  export interface IWorkflowStep extends IWorkflowGridCell {
    title: string,
    index: number,
    row: number,
    colSpan: number,
    color: string,
    isSubmit?: boolean,
    inputRow?: Array<IWorkflowGridCell>
  }

  export class WorkflowStep implements IWorkflowStep {

    public inputRow:Array<IWorkflowGridCell> = null;
    public cellType: WorkflowCellType = WorkflowCellType.Step;
    public showInput: boolean;

    constructor(public title: string,
                public index: number,
                public row: number,
                public colSpan: number,
                public color: string,
                public isSubmit: boolean) {

    }

    public loadInput(input: IWorkflowInput): void{
      if(this.inputRow){
        for(let cell of this.inputRow){
          if(cell.cellType === WorkflowCellType.Input){
            let inputCell = cell as WorkflowInputCell;
            inputCell.items = input.items;
          }
        }
      }
    }



    public static fromData(data: IWorkflowStep) {
      let step = new WorkflowStep(
        data.title,
        data.index,
        data.row,
        data.colSpan,
        data.color,
        data.isSubmit === true
      );

      if(data.inputRow){
        step.inputRow = [];
        let infoCell: WorkflowInfoCell;
        let inputCell: WorkflowInputCell;
        data.inputRow.forEach(c => {
          switch (c.cellType){
            case WorkflowCellType.Empty:
              step.inputRow.push(new WorkflowEmptyCell(c.row, c.colSpan));
              break;
            case WorkflowCellType.Info:
              infoCell = new WorkflowInfoCell(c.row, c.colSpan);
              step.inputRow.push(infoCell);
              break;
            case WorkflowCellType.Input:
              inputCell = new WorkflowInputCell(c.row, c.colSpan);
              step.inputRow.push(inputCell);
              break;
          }
        });
        if(infoCell && inputCell) inputCell.infoCell = infoCell;
      }

      return step;
    }

  }



}

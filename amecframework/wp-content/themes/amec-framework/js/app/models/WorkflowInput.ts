/// <reference path="../_all.ts" />

module aif {

  export enum InputStyle{
    TextArea = 1,
    NumberedInputs = 2,
    LinkedInputs = 3,
    BlankInputs = 4,
  }


  export interface IWorkflowInputItem {
    heading: string
    subHeading: string
    leadText: string;
    remainText: string;
    inputStyle: InputStyle;
    inputSize: number;
  }

  export class WorkflowInputItem implements IWorkflowInputItem {

    frameworkEntry:IAifFrameworkEntry = null;

    constructor(public heading: string,
                public subHeading: string,
                public leadText: string,
                public remainText: string,
                public inputStyle: InputStyle,
                public inputSize: number) {
      this.createFrameworkEntry();
    }

    private createFrameworkEntry():void{
      switch (this.inputStyle){
        case InputStyle.TextArea:
        default:
          //this.frameworkEntry = new AifFreeTextFrameworkEntry(this.heading);
      }
    }

    public static fromData(data: IWorkflowInputItem) {
      return new WorkflowInputItem(
        data.heading,
        data.subHeading,
        data.leadText,
        data.remainText,
        data.inputStyle,
        data.inputSize
      )
    }
  }

  export interface IWorkflowInput {
    stepIndex: number,
    items: Array<IWorkflowInputItem>;
  }

  export class WorkflowInput implements IWorkflowInput {

    public items: Array<IWorkflowInputItem>;

    constructor(
      public stepIndex: number,
      public row: number,
      public colSpan: number) {
    }
  }

  export class WorkflowInputCell implements IWorkflowGridCell {

    public cellType: WorkflowCellType = WorkflowCellType.Input;
    public infoCell: WorkflowInfoCell;
    public items: Array<WorkflowInputItem>;
    public visible: boolean = false;

    constructor(
      public row: number,
      public colSpan: number
    ) {
    }

    public showInfo(item: WorkflowInputItem){
      if(!this.infoCell) return;
      this.infoCell.leadText = item.leadText;
      this.infoCell.remainText = item.remainText;
    }

  }

  export class WorkflowInfoCell implements IWorkflowGridCell {

    public cellType: WorkflowCellType = WorkflowCellType.Info;
    public leadText: string;
    public remainText: string;
    public visible: boolean = false;

    constructor(
      public row: number,
      public colSpan: number
      )
    {    }

  }

  export class WorkflowEmptyCell implements IWorkflowGridCell {

    public cellType: WorkflowCellType = WorkflowCellType.Empty;

    constructor(
      public row: number,
      public colSpan: number
    ){}
  }

}
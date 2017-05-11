/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export interface IWorkflowRow {
    cells:Array<IWorkflowGridCell>;
  }

  export class WorkflowRow implements IWorkflowRow {

    constructor(
      public cells:Array<IWorkflowGridCell>
    ){}

  }

}
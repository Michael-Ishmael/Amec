/// <reference path="../_all.ts" />

module aif {

  export interface IAifScope extends ng.IScope {

    steps: WorkflowStep[];
    rows: WorkflowRow[];

  }

}
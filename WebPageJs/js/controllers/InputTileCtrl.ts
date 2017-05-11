/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export interface IInputCtrlScope extends ng.IScope {
    cell:WorkflowInputCell;
    step:WorkflowStep;
  }

  export class ListInputTileCtrl {

    public static $inject = ["$scope", "viewService"];

    public cell:WorkflowInputCell;
    public step:WorkflowStep;

    public message:string = "List testy";

    constructor(private $scope:IInputCtrlScope, public vs:ViewService) {
      this.init();
    }

    private init(): void {
      this.cell = this.$scope.cell;
      this.step = this.$scope.step;
    }

    public close():void{
      this.vs.resetView();
    }

    public getColorClass(prefix:string, step:WorkflowStep):string{
      return prefix + "-" + step.color + " ";
    }

  }

}


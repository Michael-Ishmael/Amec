/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class AccountCtrl {

    public steps: WorkflowStep[];
    public rows: WorkflowRow[];
    public editMode: boolean = false;
    public editStep: WorkflowStep = null;
    public infoCell: WorkflowInfoCell = null;

    public static $inject = ["$window",
      "frameworkRepository"
    ];

    constructor(private $window: ng.IWindowService, private frameworkRepository: IFrameworkRepository) {



    }




  }
}
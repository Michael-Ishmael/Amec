/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class AifLoginScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = 'js/views/login.html';
    restrict: string = 'E';
    controller:LoginCtrl;
    contollerAs:string = 'lc';
    bindToContoller: boolean = true;

    link(scope,element,attributes,ctrl:LoginCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifLoginScreen();
      //directive.$inject = ['$location', 'toaster'];
      return directive;
    }


  }

  export class AifAccountScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = 'js/views/account.html';
    restrict: string = 'E';
    controller:AccountViewCtrl;
    contollerAs:string = 'av';
    bindToContoller: boolean = true;

    link(scope,element,attributes,ctrl:AccountViewCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifAccountScreen();
      //directive.$inject = ['$location', 'toaster'];
      return directive;
    }


  }

  export class AifCreateFwScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = 'js/views/create.html';
    restrict: string = 'E';
    controller:CreateFrameworkCtrl;
    contollerAs:string = 'cf';
    bindToContoller: boolean = true;

    link(scope,element,attributes,ctrl:CreateFrameworkCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifCreateFwScreen();
      //directive.$inject = ['$location', 'toaster'];
      return directive;
    }


  }

  export class AifSaveAsScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = 'js/views/saveAs.html';
    restrict: string = 'E';
    controller:SaveAsCtrl;
    contollerAs:string = 'cf';
    bindToContoller: boolean = true;

    link(scope,element,attributes,ctrl:SaveAsCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifSaveAsScreen();
      //directive.$inject = ['$location', 'toaster'];
      return directive;
    }


  }


}
declare var aif_constants:any;

module aif {
  'use strict';

  const TEMPLATE_PATH:string = aif_constants.templateDir;

  export class AifLoginScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/login.html';
    restrict: string = 'E';

    controller:InputGridCtrl;
    controllerAs:string = 'lc';
    bindToContoller: boolean = true;

    link(scope,element,attributes, ctrl:LoginCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifLoginScreen();
      //directive.$inject = ['$location'];
      return directive;
    }


  }

  export class AifUserScreens implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/userScreens.html';
    //template: string = "<h1>User Screens</h1>";
    restrict: string = 'E';
    controller = UserScreensCtrl;
    controllerAs:string = 'us';
    bindToController: boolean = true;
    replace =  true;
    //replace=true;

    link(scope,element,attributes):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifUserScreens();
      //directive.$inject = ['$location'];
      return directive;
    }


  }


  export class AifAccountScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/account.html';
    restrict: string = 'E';
    controller:AccountViewCtrl;
    controllerAs:string = 'av';
    bindToController: boolean = true;

    link(scope,element,attributes,ctrl:AccountViewCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifAccountScreen();
      //directive.$inject = ['$location'];
      return directive;
    }


  }

  export class AifCreateFwScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/create.html';
    restrict: string = 'E';
    controller:CreateFrameworkCtrl;
    controllerAs:string = 'cf';
    bindToController: boolean = true;

    link(scope,element,attributes,ctrl:CreateFrameworkCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifCreateFwScreen();
      //directive.$inject = ['$location'];
      return directive;
    }


  }

  export class AifSaveAsScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/saveAs.html';
    restrict: string = 'E';
    controller:SaveAsCtrl;
    controllerAs:string = 'cf';
    bindToController: boolean = true;

    link(scope,element,attributes,ctrl:SaveAsCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifSaveAsScreen();
      //directive.$inject = ['$location'];
      return directive;
    }


  }

  export class AifRegisterScreen implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/register.html';
    restrict: string = 'E';
    controller:RegisterCtrl;
    controllerAs:string = 'rc';
    bindToController: boolean = true;

    link(scope,element,attributes,ctrl:RegisterCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifRegisterScreen();
      //directive.$inject = ['$location'];
      return directive;
    }


  }

  export class AifResetPassword implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/resetPassword.html';
    restrict: string = 'E';
    controller:ResetPasswordCtrl;
    controllerAs:string = 'rc';
    bindToController: boolean = true;

    link(scope,element,attributes,ctrl:ResetPasswordCtrl):void {

    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifResetPassword();
      //directive.$inject = ['$location'];
      return directive;
    }


  }

  export class AifFrameworkSummary implements ng.IDirective {

    static $inject: Array<string> = [''];
    templateUrl: string = TEMPLATE_PATH + '/js/app/views/frameworkSummary.html';
    restrict: string = 'E';


    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifFrameworkSummary();
      //directive.$inject = ['$location'];
      return directive;
    }
  }

  export class AifInputGrid implements ng.IDirective {

    static $inject: Array<string> = [''];
    templateUrl: string = TEMPLATE_PATH + '/js/app/views/inputGrid.html';
    restrict: string = 'E';
    scope: {[key: string] : string} = {
      step: '='
    };
    controller =InputGridCtrl;
    controllerAs:string = 'ig';
    bindToController: boolean = true;

    link(scope,element,attributes, ctrl:InputGridCtrl):void {
      if(ctrl){
        ctrl.init()
      }
    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifInputGrid();
      //directive.$inject = ['$location'];
      return directive;
    }
  }

  export class AifListInputTile implements ng.IDirective {

    static $inject: Array<string> = [''];

    templateUrl: string = TEMPLATE_PATH + '/js/app/views/listInputTile.html';
    restrict: string = 'E';
    scope: {[key: string] : string} = {
       cell: '=',
       step: '='
     };
    controller = ListInputTileCtrl;
    controllerAs:string = 'li';
    //replace=true;

    link(scope,element,attributes):void {
    }

    constructor() {

    }

    static factory(): ng.IDirectiveFactory {
      const directive = () => new AifListInputTile();
      //directive.$inject = ['$location'];
      return directive;
    }

  }


}
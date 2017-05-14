

module aif {
  'use strict';

  export enum AccountDisplayRoute {
    FromLogin = 0,
    FromSave = 1,
    FromViewAccount = 2
  }

  export class ViewService {

    public static $inject = ["$sce"];

    constructor(private $sce:ng.ISCEService){
      this.reset();
    }

    public fadeBg:boolean = false;
    public displayEdit:boolean = false;
    public displayLogin:boolean = false;
    public displayAccount:boolean = false;
    public displayCreate:boolean = false;
    public displaySaveAs:boolean = false;
    public accountDisplayRoute:AccountDisplayRoute = AccountDisplayRoute.FromViewAccount;
    public displayFtnDetails:boolean = false;

    public displayGrid = false;
    public displayControls = false;
    public displayLoading = true;

    public displaySummary:boolean =false;

    public displaySelectFramework:boolean = false;
    public hasExistingFrameworks:boolean = false;
    public displayRegister:boolean = false;
    public displaySave:boolean = false;

    public showLoading(){
      this.reset();
      this.displayGrid = false;
      this.displayControls = false;
      this.displayLoading = true;
    }

    public showSummary():void {

      this.reset();
      this.displaySummary = true;
      this.displayGrid = false;

    }

    public showGrid():void {

      this.reset();
      this.displaySummary = false;
      this.displayGrid = true;

    }

    public showingUserScreens():boolean {
      //TODO: Improve
      return this.displayAccount || this.displayLogin || this.displaySaveAs
          || this.displayCreate || this.displayFtnDetails || this.displaySelectFramework
          || this.displayRegister || this.displaySave ;
    }

    public showLogin(fromSave:boolean = false):void{
      this.reset();
      this.fadeBg = true;
      if(fromSave) this.accountDisplayRoute = AccountDisplayRoute.FromSave;
      this.displayLogin = true;
    }

    public showAccount(route:AccountDisplayRoute):void{
      this.reset();
      this.fadeBg = true;
      this.displayAccount = true;
      this.accountDisplayRoute = route;
    }

    public showCreateFramework(route:AccountDisplayRoute, hasExisting:boolean){
      this.reset();
      this.fadeBg = true;
      this.displayCreate = true;
      this.accountDisplayRoute = route;
      this.hasExistingFrameworks = hasExisting;
    }

    public showForgottenDetails(){
      this.reset();
      this.fadeBg = true;
      this.displayFtnDetails = true;
    }

    public resetView() {
      this.reset();
    }

    public showRegister(){
      this.reset();
      this.fadeBg = true;
      this.displayRegister = true;
    }

    public attemptSave(loggedIn:boolean, hasExisting:boolean = false){
      this.reset();
      this.fadeBg = true;
      this.accountDisplayRoute = AccountDisplayRoute.FromSave;
      if(!loggedIn) {
        this.displayLogin = true;
        return;
      } else {
        if(hasExisting){
          this.displaySaveAs = true;
        } else {
          this.displayCreate = true;
        }
      }
    }

    public showEdit(){
      this.reset();
      this.displayEdit = true;
      this.fadeBg =true;
    }

    public showCreate(hasExisting:boolean = false){
      this.reset();
      this.fadeBg = true;
      this.displayCreate = true;
    }

    private reset():void{
      this.fadeBg = false;
      this.displayEdit = false;
      this.displayLogin = false;
      this.displayAccount = false;
      this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
      this.displayCreate = false;
      this.displaySaveAs = false;

      this.displaySelectFramework = false;
      this.hasExistingFrameworks = false;
      this.displayFtnDetails = false;
      this.displayRegister = false;
      this.displaySave = false;

      this.displayControls = true;
      this.displayGrid = true;
      this.displayLoading = false;
  }

  }

}


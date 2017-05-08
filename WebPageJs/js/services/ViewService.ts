/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export enum AccountDisplayRoute {
    FromLogin = 0,
    FromSave = 1,
    FromViewAccount = 2
  }

  export class ViewService {

    public static $inject = ["$sce"];

    private MESSAGES = {
      DEFAULT_LOGIN_Q : "New here?",
      DEFAULT_LOGIN_A : "Create an account",
      SAVE_ATTEMPT_LOGIN_Q : "You need to be logged in to save progress.<br>Log in below or",
      SAVE_ATTEMPT_LOGIN_A : "click here to create an account",
      OR_CREATE_NEW_FRAMEWORK : "...or create a new framework",
      JUST_CREATE_NEW_FRAMEWORK : "Use the fields below create a new framework"
    };

    constructor(private $sce:ng.ISCEService){
      this.reset();
    }

    public fadeBg:boolean = false;
    public displayLogin:boolean = false;
    public displayAccount:boolean = false;
    public displayCreate:boolean = false;
    public displaySaveAs:boolean = false;
    public accountDisplayRoute:AccountDisplayRoute = AccountDisplayRoute.FromViewAccount;


    public displaySelectFramework:boolean = false;
    public hasExistingFrameworks:boolean = false;
    public displayFtnDetails:boolean = false;
    public displayRegister:boolean = false;
    public displaySave:boolean = false;


    public loginMessageQ:string = this.MESSAGES.DEFAULT_LOGIN_Q;
    public loginMessageA:string = this.MESSAGES.DEFAULT_LOGIN_A;



    public showLogin(fromSave:boolean = false){
      this.reset();
      this.fadeBg = true;
      if(fromSave) this.accountDisplayRoute = AccountDisplayRoute.FromSave;
      this.displayLogin = true;
    }

    public showAccount(route:AccountDisplayRoute){
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
      if(!loggedIn) {
        this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.SAVE_ATTEMPT_LOGIN_Q);
        this.loginMessageA = this.MESSAGES.SAVE_ATTEMPT_LOGIN_A;
        this.displayLogin = true;
        return;
      } else {
        this.accountDisplayRoute = AccountDisplayRoute.FromSave;
        if(hasExisting){
          this.displaySaveAs = true;
        } else {
          this.displayCreate = true;
        }
      }
    }

    public showCreate(hasExisting:boolean = false){
      this.reset();
      this.fadeBg = true;
      this.displayCreate = true;
    }

    private reset():void{
      this.fadeBg = false;
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
      this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_Q);
      this.loginMessageA = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_A);
    }

  }

}


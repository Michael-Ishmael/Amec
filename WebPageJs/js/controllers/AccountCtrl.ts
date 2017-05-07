/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';
  import IFormController = angular.IFormController;

  export class AccountCtrl {

    public app: AifApp;
    public static $inject = ["$window", "$sce", "aifService"];

    public loginFailure:boolean = false;
    public message:string = null;
    public displayLogic:LoginDisplayLogic = null;
    public userModel:AppUser = null;
    public initialised:boolean = false;
    public currentFramework:AifFramework = null;
    public savedFrameworkModel:SavedFrameworkModel = null;

    constructor(private $window: ng.IWindowService, private $sce: ng.ISCEService , private aifService: IAifService) {
      this.init();
    }

    private init():void{
      let self = this;
      this.aifService.getApp().then(

        a => {
          self.app = a;
          if(a && a.user){
            this.userModel = a.user.asAppUser();

          } else {
            this.userModel = new AppUser(null, null, null, null, null, null);
          }
          this.initialised = true;
        }

      );

      this.displayLogic = new LoginDisplayLogic(this.$sce);
    }

    public isLoggedIn(): boolean{

      return !!(this.app && this.app.user);

    }

    public showLogin(): void {
      this.displayLogic.showLogin();
    }

    public showForgottenDetails(): void {
      this.displayLogic.showForgottenDetails();
    }

    public hideLoginBox(): void {
      this.displayLogic.hideLoginDisplay();
    }

    public showRegister(): void {
      this.displayLogic.showRegister();
    }

    public saveProgress(){
      this.displayLogic.attemptSave(this.isLoggedIn())
    }

    public login(form:ng.IFormController):void {
      if (form) {
        if(!form.$valid) return;
        form.$setPristine();
        form.$setUntouched();
      } else {
        return;
      }

      let self = this;
      this.aifService.login(this.userModel.email, this.userModel.password).then((r) => {
          if(!r.success){
            self.loginFailure = true;
            self.message = r.message;
          } else {
            self.userModel = r.user.asAppUser();
            self.savedFrameworkModel = new SavedFrameworkModel();
            self.displayLogic.showSelectFramework(self.app.user.hasExistingFrameworks());

          }
        }
      ).catch(r => {
        self.loginFailure = true;
        self.message = r.message;
      });
    }

    public registerNewUser(form:ng.IFormController){
      if(!form.$valid) return;
      this.hideLoginBox();
    }

    public loadOrCreateFramework(form:ng.IFormController):void {
      if(!form.$valid) return;
      if(this.savedFrameworkModel.existingFrameworkId > -1){
         let self = this;
        let matches = this.app.user.frameworks.filter(f => f.id ===  self.savedFrameworkModel.existingFrameworkId);
        if(matches.length) this.currentFramework = matches[0];
      } else if(this.savedFrameworkModel.newFrameworkName !== null) {
        if(this.app.user.frameworks === null) this.app.user.frameworks = [];
        let newId = this.app.user.frameworks.length + 1;
        let newFramework = new AifFramework(newId, this.savedFrameworkModel.newFrameworkName,
                this.savedFrameworkModel.newFrameworkDescription);
        this.app.user.frameworks.push(newFramework);
        this.currentFramework = newFramework;

      }

      this.hideLoginBox();

    }

    public logout():void {
      let self = this;
      this.displayLogic.hideLoginDisplay();
      this.aifService.logout().then(
        (b) => {

            if(b){
              //this.$window.location.href = "";
              window.location.href = window.location.href;
            }

      });

    }


  }

  export class SavedFrameworkModel{

    public existingFrameworkId:number = -1;
    public createNew:boolean = false;
    public newFrameworkName:string = null;
    public newFrameworkDescription:string = null;

  }


  export class LoginDisplayLogic {

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
    public loginGrayed:boolean = false;
    public displaySelectFramework:boolean = false;
    public hasExistingFrameworks:boolean = false;
    public displayFtnDetails:boolean = false;
    public displayRegister:boolean = false;
    public displaySave:boolean = false;


    public loginMessageQ:string = this.MESSAGES.DEFAULT_LOGIN_Q;
    public loginMessageA:string = this.MESSAGES.DEFAULT_LOGIN_A;
    public createMessage:string = this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK;


    public showLogin(){
      this.reset();
      this.fadeBg = true;
      this.displayLogin = true;
    }

    public showSelectFramework(hasExisting){
      this.reset();
      this.fadeBg = true;
      this.displayLogin = true;
      this.loginGrayed = true;
      this.displaySelectFramework = true;
      this.hasExistingFrameworks = hasExisting;
      if(hasExisting) this.createMessage = this.MESSAGES.OR_CREATE_NEW_FRAMEWORK;
    }

    public showForgottenDetails(){
      this.reset();
      this.fadeBg = true;
      this.displayFtnDetails = true;
    }

    public hideLoginDisplay() {
      this.reset();
    }

    public showRegister(){
      this.reset();
      this.fadeBg = true;
      this.displayRegister = true;
    }

    public attemptSave(loggedIn:boolean){
      this.reset();
      this.fadeBg = true;
      if(!loggedIn) {
        this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.SAVE_ATTEMPT_LOGIN_Q);
        this.loginMessageA = this.MESSAGES.SAVE_ATTEMPT_LOGIN_A;
        this.displayLogin = true;
        return;
      }
      this.displaySave = true;
    }

    private reset():void{
      this.fadeBg = false;
      this.displayLogin = false;
      this.loginGrayed = false;
      this.displaySelectFramework = false;
      this.hasExistingFrameworks = false;
      this.displayFtnDetails = false;
      this.displayRegister = false;
      this.displaySave = false;
      this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_Q);
      this.loginMessageA = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_A);
      this.createMessage = this.$sce.trustAsHtml(this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK);
    }
  }
}
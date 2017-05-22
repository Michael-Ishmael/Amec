
let getEntireDom;
let downloadPDF;

module aif {
  'use strict';
  import IFormController = angular.IFormController;

  export class AppCtrl {

    public app: AifApp;
    public static $inject = ["$scope" ,"$timeout", "$sce", "userRepository", "viewService"];

    public loginFailure:boolean = false;
    public message:string = null;
    public initialised:boolean = false;
    public savedFrameworkModel:SavedFrameworkModel = null;

    public currentFramework:AifFramework  = null;
    public currentUser:AifUser  = null;
    public displayLoginReminder:boolean;
    private reminderTimeoutPromise:ng.IPromise<boolean>;


    constructor(private $scope: ng.IScope, private $timeout: ng.ITimeoutService, private $sce: ng.ISCEService,
                private userRepository: UserRepository, public vs:ViewService) {
      this.init();
    }

    private init():void{

      this.$scope.$on("user:loggedIn", (event:ng.IAngularEvent, data:any) => { this.userLoggedChanged(data) } );
      this.$scope.$on("user:loggedOut", (event:ng.IAngularEvent) => { this.userLoggedChanged(null) } );
      this.$scope.$on("framework:frameworkUpdated", (event:ng.IAngularEvent, data:any) => { this.setCurrentFramework(data) } );
      this.$scope.$on("framework:frameworkSwitched", (event:ng.IAngularEvent, data:any) => { this.setCurrentFramework(data) } );


      this.vs.showLoading();
      this.userRepository.get().then(
        status => {
          if(status.backendError){
            //Handle no back end here and return
          }
          this.vs.resetView();
          if(status.user) {
            this.currentUser = status.user;
            if(this.currentUser.loggedInFromSave){
              this.initialised = true;
              this.vs.showCreateFramework(AccountDisplayRoute.FromSave, this.currentUser.hasFrameworks());
              return;
            }
            if(!this.currentUser.currentFramework){
              this.initialised = true;

              if(this.userRepository.currentUserFramework && this.userRepository.currentUserFramework.isDraft){

                this.vs.showCreateFramework(AccountDisplayRoute.FromDetectUnsaved, this.currentUser.hasFrameworks());
                return;
              }

              if(this.currentUser.hasExistingFrameworks())
                this.vs.showAccount(AccountDisplayRoute.FromLogin);
              else {
                this.vs.showCreateFramework(AccountDisplayRoute.FromLogin, this.currentUser.hasFrameworks());
              }
            }
            if(this.currentUser.currentFramework) this.currentFramework = this.currentUser.currentFramework;

          } else {

            this.reminderTimeoutPromise = this.$timeout(():boolean => {
              this.vs.showLoginReminder(() => {

                this.userRepository.setRegisterReminderStatus(ReminderStatus.Dismissed);
                this.vs.hideLoginReminder();
              });
              return true;
            }, 2500);

          }
          this.initialised = true;
        }

      );
    }

    private userLoggedChanged(user:AifUser):void{
      if(user){
        this.displayLoginReminder = false;
        if(this.reminderTimeoutPromise) this.$timeout.cancel(this.reminderTimeoutPromise);
        this.currentUser = user;
        if(this.currentUser.currentFramework){
          this.setCurrentFramework(this.currentUser.currentFramework);
        } else {
          if(user.hasExistingFrameworks())
            this.vs.showAccount(AccountDisplayRoute.FromLogin);
          else {
            this.vs.showCreateFramework(AccountDisplayRoute.FromLogin, false);
          }
        }
      } else {
        this.currentUser = null;
        this.currentFramework = null;
      }

    }

    private setCurrentFramework(framework:AifFramework):void{
      if(this.currentUser){
        this.currentFramework = this.currentUser.currentFramework;
      } else {
        this.currentFramework = framework;
      }


    }

    public isLoggedIn(): boolean{

      return !!this.currentUser;

    }

    public submitFramework(){
      //TODO: saving etc

      this.vs.showSummary();
    }

    public showLogin(): void {
      this.vs.showLogin();
    }

    public showForgottenDetails(): void {
      this.vs.showForgottenDetails();
    }

    public hideLoginBox(): void {
      this.vs.resetView();
    }

    public showRegister(): void {
      this.vs.showRegister();
    }

    public viewAccount(): void {
      this.vs.showAccount(AccountDisplayRoute.FromViewAccount);
    }

    public saveProgress(){
      let loggedIn = this.isLoggedIn();
      let hasExisting = loggedIn ? this.currentUser.hasExistingFrameworks() : false;
      let hasCurrent = loggedIn ? !!this.currentUser.currentFramework : false;
      this.vs.attemptSave(loggedIn, hasExisting, !hasCurrent);
    }



    public downloadAifPdf(){
      let title = this.currentFramework ?  this.currentFramework.name : null;
      let fileName = "AMEC Measurement Framework" + (title ? ' - ' + title : '');
      if(getEntireDom && downloadPDF){
        let opts = {
          document_type: 'pdf',
          document_content: getEntireDom(title),
          name: fileName,
          javascript: false,
          test: false
        };
        downloadPDF(opts,'UmPbAOzv3fSfgTsHLZV');
      }

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
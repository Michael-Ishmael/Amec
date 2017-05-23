
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
            if(status.registerReminderStatus < ReminderStatus.Dismissed)
            this.reminderTimeoutPromise = this.$timeout(():boolean => {
              this.displayLoginReminder = true;

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

    public dismissLoginReminder = (): void => {

      this.displayLoginReminder = false;
      this.userRepository.setRegisterReminderStatus(ReminderStatus.Dismissed)

    };

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


  }
}
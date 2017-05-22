

module aif {
  'use strict';
  import IShepherdTour = TetherShepherd.IShepherdTour;
  import IShepherdTourStepOptions = TetherShepherd.IShepherdTourStepOptions;

  export enum AccountDisplayRoute {
    FromLogin = 0,
    FromSave = 1,
    FromViewAccount = 2,
    FromEdit = 3,
    FromDetectUnsaved = 4
  }

  export class ViewService {

    public static $inject = ["$sce"];

    constructor(private $sce:ng.ISCEService){
      this.reset();
    }

    public registerButtonId:string = "#register-button";

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
    public loginReminder:IShepherdTour = null;

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

    private loginReminderCallback:Function = null;

    public showLoginReminder(callback:Function){
      if(this.displaySummary) return;
      this.loginReminderCallback = callback;
      if(!this.loginReminder) this.loginReminder = this.createLoginReminder();

      this.loginReminder.start()

    }

    public hideLoginReminder(){
      if(!!this.loginReminder){

        this.loginReminder.cancel();

      }
    }

    private createLoginReminder():IShepherdTour{
      let loginReminder = new Shepherd.Tour({
        defaults: {
          classes: 'shepherd-theme-default'
        }
      });

      let stepOptions:IShepherdTourStepOptions ={
        text: '<p id="register-p">"New functionality has been added to the AMEC Integrated Evaluation Framework to improve the user experience. Now you can save the progress of your work and can save and edit up to 10 different frameworks per user account. To do so you must register, create an account and log in. While it is not compulsory to do so, this important new functionality is only available once logged into your account. Please either sign in or register if it’s your first time here to begin.  Don’t worry, use of the framework remains completely free!</p>',
        attachTo: this.registerButtonId + " [bottom left]",
        tetherOptions: {
          target: this.registerButtonId,
          attachment: 'top left',
          targetAttachment: 'bottom left'
        },
        //classes: 'aif-app-shepherd-box',
        buttons: [
          {
            text: 'OK',
            action: this.loginReminderCallback
          }
        ]
      };

      loginReminder.addStep('example-step', stepOptions);

      return loginReminder;

    }

    public showRegister(route:AccountDisplayRoute = null){
      this.reset();
      this.fadeBg = true;
      this.displayRegister = true;
      if(route !== null) this.accountDisplayRoute = route;
    }

    public showSaveAs(){
      this.reset();
      this.fadeBg = true;
      this.displaySaveAs = true;
    }

    public attemptSave(loggedIn:boolean, hasExisting:boolean = false, noCurrent:boolean = false){
      this.reset();
      this.fadeBg = true;
      this.accountDisplayRoute = AccountDisplayRoute.FromSave;
      if(!loggedIn) {
        this.displayLogin = true;
        return;
      } else {
        if(hasExisting && !noCurrent){
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
      this.displaySummary = false;
      this.displayLoading = false;

      if(!!this.loginReminder){

        this.loginReminder.cancel();

      }

  }

  }

}


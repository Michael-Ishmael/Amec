

module aif {
  'use strict';

  export class CreateFrameworkCtrl {

    public static $inject = ["$scope", "userRepository", "viewService"];

    public title:string = "New Measurement Framework";
    public user:AifUser = null;

    public existingFrameworkId:string = null;
    public newFrameworkName:string = null;
    public newFrameworkDescription:string = null;

    public createMessage:string = "";
    public cancelButtonText:string = "Cancel";

    public saveUnsuccessful:boolean = false;
    public saveFailMessage:string = null;
    public hasFrameworks:boolean = false;
    public editMode:boolean = false;
    public submitAction: (form:ng.IFormController) => void = this.createNewFramework;

    constructor(private $scope: ng.IScope, private  userRepository:UserRepository, public vs:ViewService) {
      this.init();
    }

    private init(): void {
      if(!this.userRepository.currentUser){
        this.vs.showLogin();
        return;
      }
      this.user = this.userRepository.currentUser;
      this.hasFrameworks = this.user.hasFrameworks();
      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromEdit && this.userRepository.tempFramework){
        this.editMode = true;
        this.title = "Edit " + this.userRepository.tempFramework.name;
        this.submitAction = this.renameFramework;
        this.newFrameworkName = this.userRepository.tempFramework.name;
        this.newFrameworkDescription = this.userRepository.tempFramework.description;
        return

      }

      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromSave){
        this.createMessage = "Create a new framework to save your progress.";
      }
      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromDetectUnsaved){
        this.title = "Save your work";
        this.createMessage = "Create a new framework to save your progress.";
      }
      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromLogin){
        if(!this.hasFrameworks){
          this.title = "Create your first framework";
          this.createMessage = "Create a new framework to store your progress.";
          this.cancelButtonText = "Skip for now";
        }

      }


    }


    public createNewFramework(form:ng.IFormController):void{
      if(!form.$valid) return;
      if(this.user){
        this.userRepository.createNewFramework(this.newFrameworkName, this.newFrameworkDescription)
          .then((r) => {
            if(r.success){
                this.vs.resetView();
                          } else {
              this.saveUnsuccessful = true;
              this.saveFailMessage = r.message;
            }
          })
      }
    }

    public showSaveAs():void{
      this.vs.showSaveAs()
    }

    public renameFramework(form:ng.IFormController):void{
      if(!form.$valid) return;
      if(!this.userRepository.tempFramework) return;
      if(this.user){
        this.userRepository.renameFramework(this.userRepository.tempFramework.id, this.newFrameworkName, this.newFrameworkDescription)
            .then((r) => {
              if(r.success){
                if(this.editMode){
                  this.editMode = false;
                  this.vs.showAccount(AccountDisplayRoute.FromEdit);
                }

              } else {
                this.saveUnsuccessful = true;
                this.saveFailMessage = r.message;
              }
            })
      }
    }




  }

}


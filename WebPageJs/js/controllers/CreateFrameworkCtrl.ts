/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class CreateFrameworkCtrl {

    public static $inject = ["$scope", "userRepository", "viewService"];

    public title:string = "New Measurement Framework";
    public user:AifUser = null;

    public existingFrameworkId:string = null;
    public newFrameworkName:string = null;
    public newFrameworkDescription:string = null;

    public createMessage:string = " ";
    public cancelButtonText:string = "Cancel";

    public saveUnsuccessful:boolean = false;
    public saveFailMessage:string = null;

    constructor(private $scope: ng.IScope, private  userRepository:UserRepository, public vs:ViewService) {
      this.init();
    }

    private init(): void {
      if(!this.userRepository.currentUser){
        this.vs.showLogin();
        return;
      }
      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromSave){
        this.createMessage = "Create a new framework to save your progress."
      }
      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromLogin){
        this.title = "Create your first framework";
        this.createMessage = "Create a new framework to store your progress."
        this.cancelButtonText = "Skip for now";
      }
      this.user = this.userRepository.currentUser;

    }

    public createNewFramework(form:ng.IFormController){
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


  }

}




module aif {
  'use strict';

  export class AccountViewCtrl {

    public static $inject = ["$scope", "userRepository", "viewService"];

    public title:string = "Your account";
    public user:AifUser = null;

    public createMessage:string = "Use the fields below create a new framework.";

    private colors:Array<string> = [ "red", "yellow",  "green",  "light_blue",  "dark_blue",  "purple"];
    public frameworkInEdit:AifFramework = null;
    public loadingFramework:boolean = false;

    constructor(private $scope: ng.IScope, private  userRepository:UserRepository, public vs:ViewService) {
      this.init();
    }

    
    public getColorClass(prefix:string, index:number = 0):string{
      if(index > this.colors.length -1) index = index % this.colors.length;
      return prefix + "-" + this.colors[index] + " ";
    }

    private init():void{
      if(!this.userRepository.currentUser){
        this.vs.showLogin();
        return;
      }

      this.user = this.userRepository.currentUser;
      if(this.user.hasExistingFrameworks()){
        this.createMessage = "...or create a new framework.";
      }
      this.setTitle(this.vs.accountDisplayRoute)
    }

    public logout():void {

      this.closeView();
      this.vs.showLoading();
      this.userRepository.logout().then(
        (b) => {

          if(b){
            //this.$window.location.href = "";
            window.location.href = window.location.href;
          }

        });

    }

    private setTitle(displayRoute:AccountDisplayRoute):void{
      switch (displayRoute){
        case AccountDisplayRoute.FromLogin:
          this.title = "Log in successful!";
          break;
        case AccountDisplayRoute.FromSave:
          this.title = "Save framework";
          break;
        case AccountDisplayRoute.FromViewAccount:
        default:
          // do nothing
          break;
      }
    }

    public closeView(){
      this.user.frameworks.forEach(f => f.selected = false);
      this.user.frameworks.forEach(f => f.flaggedDelete = false);
      this.vs.resetView();
    }

    public loadSelectedFramework(){
      if(this.user && this.frameworkIsSelected()) {
        this.loadingFramework = true;
        let selected = this.user.frameworks.filter(f => f.selected)[0];

        this.userRepository.loadFramework(selected.id).then(
          (r) => {
            if (r.success) {
              this.loadingFramework = false;
              this.closeView();
            } else {
            }
          }
        );
      }
    }



    public showCreateFramework():void{

      this.vs.showCreate(this.user.hasExistingFrameworks())

    }

    public frameworkIsSelected():boolean{
      return this.user.frameworks.some(f => { return f.selected});
    }

    public deleteFramework($event:ng.IAngularEvent, framework:AifFramework):void{
      this.userRepository.deleteFramework(framework.id).then(s => {
        if(!s){
          framework.flaggedDelete = false;
          //TODO: message failure
        }
      });
      $event.preventDefault()
    }

    public toggleSelectFramework(framework:AifFramework){
      if(framework.selected){
        framework.selected = false;
      } else {
        this.user.frameworks.forEach(f => f.selected = false);
        framework.selected = true;
      }

    }


    public toggleFlagDeleteFramework($event:ng.IAngularEvent, framework:AifFramework){
      framework.flaggedDelete = !framework.flaggedDelete;
    }

    public editFramework(framework:AifFramework){
      this.userRepository.tempFramework = framework;
      this.vs.showCreateFramework(AccountDisplayRoute.FromEdit, false);
    }

  }

}


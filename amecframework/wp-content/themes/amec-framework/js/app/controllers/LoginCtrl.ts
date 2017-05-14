module aif {
  'use strict';
  import IFormController = angular.IFormController;

  export class LoginCtrl {

    public static $inject = ["viewService", "userRepository" ];

    public email:string;
    public password:string;
    public loginFailure:boolean = false;
    public loginMessage:string = null;
    public showNeedMessage:boolean = false;
    public waiting:boolean = false;

    constructor(public vs:ViewService, private userRepository: IUserRepository) {
      this.init();
    }

    public init():void {
      if(this.vs.accountDisplayRoute == AccountDisplayRoute.FromSave){
        this.showNeedMessage = true;
      }
    }

    public login(form:ng.IFormController):void {
      if (form) {
        if (!form.$valid) return;
        form.$setPristine();
        form.$setUntouched();
      } else {
        return;
      }

      this.waiting = true;

      this.userRepository.login(this.email, this.password).then((r) => {
        this.waiting = false;
          if(!r.success){

            this.loginFailure = true;
            if(r.message){
              this.loginMessage = r.message;
            } else {
              this.loginMessage = "Error contacting server"
            }
          } else {
            this.loginFailure = false;
            this.loginMessage = "Login successful loading...";
            this.vs.showLoading();
            window.location.href = window.location.href;

          }
        }
      ).catch(r => {
        this.waiting = false;
        this.loginFailure = true;
        this.loginMessage = r.message;
      });

    }

    public showForgottenDetails(){

      this.vs.showForgottenDetails();

    }
  }

}
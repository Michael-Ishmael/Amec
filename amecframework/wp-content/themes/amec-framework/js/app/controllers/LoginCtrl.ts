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

      this.userRepository.login(this.email, this.password).then((r) => {
          if(!r.success){
            this.loginFailure = true;
            this.loginMessage = r.message;
          } else {
            window.location.href = window.location.href; //' + "?loggedin=true" ;
            // if(r.user.hasExistingFrameworks())
            //   this.vs.showAccount(AccountDisplayRoute.FromLogin);
            // else {
            //   this.vs.showCreateFramework(AccountDisplayRoute.FromLogin, false);
            // }
          }
        }
      ).catch(r => {
        this.loginFailure = true;
        this.loginMessage = r.message;
      });

    }

    public showForgottenDetails(){

      this.vs.showForgottenDetails();

    }
  }

}
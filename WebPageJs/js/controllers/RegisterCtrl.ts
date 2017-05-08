/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class RegisterCtrl {

    public static $inject = ["viewService", "userRepository" ];

    public email:string;
    public password:string;
    public loginFailure:boolean = false;
    public loginMessage:string = null;
    public showNeedMessage:boolean = false;

    public userModel:AppUser = null;

    constructor(public vs:ViewService, private userRepository: IUserRepository) {
      this.init();
    }

    private init(): void {
      this.userModel = new AppUser(null, null, null, null, null, null, null);
    }

    public registerNewUser(form:ng.IFormController){
      if(!form.$valid) return;
      this.userRepository.registerNewUser(this.userModel).then(r => {
        if(r.success){
          this.vs.resetView();
        } else {
          //TODO: display error
        }
      });

    }


  }

}


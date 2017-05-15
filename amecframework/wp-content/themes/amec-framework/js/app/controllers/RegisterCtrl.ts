

module aif {
  'use strict';

  export class RegisterCtrl {

    public static $inject = ["viewService", "userRepository" ];

    public email:string;
    public password:string;
    public loginFailure:boolean = false;
    public loginMessage:string = null;
    public showNeedMessage:boolean = false;
    public waiting:boolean = false;
    public userModel:AppUser = null;

    constructor(public vs:ViewService, private userRepository: UserRepository) {
      this.init();
    }

    private init(): void {
      this.userModel = new AppUser(null, null, null, null, null, null, null);

      this.userModel = new AppUser("guyincognito@hamptons.com", "Guy", "Incognito", "Hamptons", "Boss", "en", "07931");
      this.userModel.password = "Crumpet1";
      this.userModel.passwordConfirmation = "Crumpet1";
    }

    public registerNewUser(form:ng.IFormController){
      if(!form.$valid) return;
      if(this.userModel.password != this.userModel.passwordConfirmation) return;
      this.waiting = true;
      this.userRepository.registerNewUser(this.userModel, this.vs.accountDisplayRoute == AccountDisplayRoute.FromSave).then(r => {
        this.waiting = false;
        if(r.success){
          this.loginFailure = false;
          this.vs.showLoading();
          window.location.href = window.location.href;
        } else {
          this.loginFailure = true;
          this.loginMessage = r.message;
        }
      });

    }

    public isCasualEmil(email:string){

      if(!email) return;
      let isCasual:boolean = false;
      let casuals = ["hotmail", "gmail", "yahoo"]

       casuals.forEach(s => {
        if(email.toLowerCase().indexOf(s) > -1){
          isCasual = true;
        }
      });

      return isCasual;
    }


  }

}




module aif {
  'use strict';

  export class ResetPasswordCtrl {

    public static $inject = ["viewService", "userRepository" ];

    public email:string;
    public linkSent:boolean;

    constructor(public vs:ViewService, private userRepository: UserRepository) {
      this.init();
    }

    public init():void {

    }

    public resend():void {
      this.linkSent = false;
    }

    public sendReset(form:ng.IFormController):void{
      if(!form.$valid) return;
      this.userRepository.sendPasswordLink(this.email).then(s =>{

        if(s){
          this.linkSent = true;
        }

      })


    }

  }

}


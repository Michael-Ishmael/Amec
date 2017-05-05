/// <///<reference path=".../_all.ts" />

module aif {
  'use strict';

  export class AccountCtrl {

    public app: AifApp;
    public static $inject = ["$window", "aifService"];

    public loginFailure:boolean = false;
    public message:string = null;
    public displayLogin:boolean = false;

    constructor(private $window: ng.IWindowService, private aifService: IAifService) {
      let self = this;
       this.aifService.getApp().then(
         a => self.app = a
       );
    }

    public isLoggedIn(): boolean{

      return !!(this.app && this.app.user);

    }

    public showLogin(): void {
      this.displayLogin = true;
    }

    public login():void {
      let self = this;
      this.aifService.login("michaelio", "test").then((r) => {
          if(!r.success){
            self.loginFailure = true;
            self.message = r.message;
          }
        }
      );
    }

    public logout():void {
      let self = this;
      this.aifService.logout().then(
        (b) => {

            if(b){
              //this.$window.location.href = "";
              window.location.href = window.location.href;
            }

      });

    }


  }
}
/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class AifService implements IAifService {

    private user:AifUser;
    private app:AifApp;

    public static $inject = ["$timeout", "userRepository"];


    constructor(private $timeout:ng.ITimeoutService,
                private userRepository: IUserRepository){

    }

    public getApp():ng.IPromise<AifApp> {
      let self = this;
      if(self.app == null){
        return self.buildApp().then(a => self.app = a);
      }

      return this.$timeout(function() {
        return self.app;
      });
    }

    public login(username:string, password:string):ng.IPromise<LoginResult> {
      let self = this;
      return this.userRepository.login(username, password).then(
        (r) => {
            self.user = r.user;
            self.app.user = r.user;

            return r;

        }
      );

    }

    public logout():ng.IPromise<boolean> {
      return this.userRepository.logout().then(b =>
        this.app.user = null
      );
    }

    private buildApp():ng.IPromise<AifApp> {

      return this.userRepository.get().then(u => {
        this.user = u;
        this.app = new AifApp();
        this.app.user = u;
        return this.app;
      });

    }


  }

}


/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class UserRepository implements IUserRepository {

    static $inject = ["$timeout"];

    private startLoggedIn:boolean = true;

    constructor(private $timeout:ng.ITimeoutService){

    }

    get(): ng.IPromise<AifUser> {
      let self = this;
      return this.$timeout(function()  {
        if(self.startLoggedIn){
          return AifUser.createFromData(users[0]);
      } else {
          return null;
        }
      }, 200);
    }

    logout(): ng.IPromise<boolean> {
      return this.$timeout(function()  {

        return true;

      });
    }

    login(userName: string, password: string): ng.IPromise<LoginResult> {

      return this.$timeout(function()  {
        let matches = users.filter(u => u.userName == userName);
        if(matches.length){
          return new LoginResult(true, AifUser.createFromData(matches[0]), null);
        } else {
          return new LoginResult(false, null, "Login failed")
        }

      }, 200);

    }




  }

  let users: Array<IAifUser> = [
    {
      userName: "michaeli",
      firstName: "Michael",
      lastName: "Ishmael",
      organisation: "66 Bytes",
      jobTitle: "Directors",
      country: "en"
    }
  ];


}




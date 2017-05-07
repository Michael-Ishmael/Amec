
/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class UserRepository implements IUserRepository {
//wp_lostpassword_url()
    static $inject = ["$timeout"];

    private startLoggedIn:boolean = false;

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

    login(email: string, password: string): ng.IPromise<LoginResult> {

      return this.$timeout(function()  {
        let matches = users.filter(u => u.email == email);
        if(matches.length){
          let user = AifUser.createFromData(matches[0]);
          if(user.email === "mail@michaelishmael.com"){
            user.frameworks = userFrameworks;
          }
          return new LoginResult(true, user, null);
        } else {
          return new LoginResult(false, null, "Login failed")
        }

      }, 200);

    }




  }

  let users: Array<IAifUser> = [
    {
      email: "michaelishmael1976@gmail.com",
      firstName: "Michael",
      lastName: "Ishmael",
      organisation: "Michael Ishmael Ltd",
      jobTitle: "Director",
      language: "en"
    },
    {
      email: "mail@michaelishmael.com",
      firstName: "Michael",
      lastName: "Ishmael",
      organisation: "66 Bytes",
      jobTitle: "Director",
      language: "en"
    }
  ];

  let userFrameworks: Array<AifFramework> = [
    {
      id: 1,
      name: "Coca-cola summer campaign",
      description: "New music promotion"
    },
    {
      id :2,
      name: "Sprite summer campaign",
      description: "New basketball promotion"
    }

  ];


}




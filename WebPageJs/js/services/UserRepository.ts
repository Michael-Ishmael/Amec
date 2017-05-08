/// <reference path="../_all.ts" />

module aif {
  'use strict';

  export class UserRepository implements IUserRepository {
//wp_lostpassword_url()
    static $inject = ["$timeout", "$rootScope", '$cookies'];

    //For debug
    private startLoggedIn: boolean = false;

    public currentUser: AifUser;

    constructor(private $timeout: ng.ITimeoutService, private $rootScope: ng.IRootScopeService, private $cookies: ng.cookies.ICookiesService) {

    }

    get(): ng.IPromise<AifUser> {

      return this.$timeout(() => {
        let cUser = this.$cookies.getObject("aifUser");
        if (cUser && cUser.email) {
          let matches = users.filter(u => u.email == cUser.email);
          if (matches.length) {
            let user = AifUser.createFromData(matches[0]);
            if (user.email === "mail@michaelishmael.com") {
              user.frameworks = userFrameworks;
              if(cUser.currentFrameworkId){
                user.setExistingFramework(cUser.currentFrameworkId);
              }

            }
            this.currentUser = user;
            return user;

        }
        else {
          return null;
        }
      }
      }
      , 200);
    }

    save(): ng.IPromise<SaveFrameworkResult>{
      return this.$timeout(() => {

        if(!this.currentUser){
          return new SaveFrameworkResult(false, null, "User not logged in");
        }

        if(!this.currentUser.currentFramework){
          //Save here
        }
        return new SaveFrameworkResult(true, this.currentUser.currentFramework, null);

      }, 200);
    }

    logout(): ng.IPromise<boolean> {
      return this.$timeout(() => {

        this.currentUser = null;
        this.$cookies.remove("aifUser");
        this.$rootScope.$broadcast("user:loggedOut");
        return true;
      });
    }

    login(email: string, password: string): ng.IPromise<LoginResult> {

      return this.$timeout(() => {
        let matches = users.filter(u => u.email == email);
        if (matches.length) {
          let user = AifUser.createFromData(matches[0]);
          if (user.email === "mail@michaelishmael.com") {
            user.frameworks = userFrameworks;
          }
          this.currentUser = user;
          this.$rootScope.$broadcast("user:loggedIn", user);
          this.storeUser();
          return new LoginResult(true, user, null);
        } else {
          return new LoginResult(false, null, "Login failed")
        }

      }, 200);

    }

    private storeUser(){
      let userObj= {
        email: this.currentUser.email,
        currentFrameworkId: null
      };
      if(this.currentUser.currentFramework) userObj.currentFrameworkId = this.currentUser.currentFramework.id;
      this.$cookies.putObject("aifUser", userObj);
    }


    createNewFramework(name: string, description: string): ng.IPromise<SaveFrameworkResult> {
      let hasUser = !!this.currentUser;
      return this.$timeout(() => {
        if (!hasUser) return new SaveFrameworkResult(false, null, "User not logged in");

        let newId = this.currentUser.frameworks == null ? 1 : this.currentUser.frameworks.length + 1;
        let framework = new AifFramework(newId, name, description);
        this.currentUser.frameworks.forEach(f => f.current = false);
        framework.current = true;
        this.currentUser.addNewFramework(framework);
        this.storeUser();
        this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
        return new SaveFrameworkResult(true, framework, "Framework created")

      }, 200);
    }


    setExistingFramework(id: number): ng.IPromise<SaveFrameworkResult> {
      let hasUser = !!this.currentUser;
      return this.$timeout(() => {
        if (!hasUser) return new SaveFrameworkResult(false, null, "User not logged in");
        if (this.currentUser.frameworks == null) return new SaveFrameworkResult(false, null, "User has no frameworks");

        let matches = this.currentUser.frameworks.filter(f => f.id === id);
        if (matches.length) {
          let framework = matches[0];
          this.currentUser.frameworks.forEach(f => f.current = false);
          framework.current = true;

          //TODO: Save framework here

          this.currentUser.currentFramework = framework;
          this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
          this.storeUser();
          return new SaveFrameworkResult(true, framework, "Framework selected")
        } else {
          this.currentUser.currentFramework = null;
          this.$rootScope.$broadcast("framework:frameworkUpdated", null);
          return new SaveFrameworkResult(false, null, "No matching frameworks found");
        }

      }, 200);
    }

    deleteFramework(id: number): ng.IPromise<boolean> {
      let hasUser = !!this.currentUser;
      return this.$timeout(() => {
        if (!hasUser) return false;
        if (this.currentUser.frameworks == null) return false;
        let foundIndex = -1;
        let foundFramework = null;
        this.currentUser.frameworks.forEach((f, i) => {
          if(f.id == id){
            foundIndex = i;
            foundFramework = f;
          }
        });
        if(foundIndex > -1){
          if(this.currentUser.currentFramework == foundFramework){
            this.currentUser.currentFramework = null;
            this.$rootScope.$broadcast("framework:frameworkUpdated", null);
          }
          this.currentUser.frameworks.splice(foundIndex, 1);
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
      name: "Coca-cola spring campaign",
      description: "New music promotion",
      selected: false,
      flaggedDelete: false,
      current:false
    },
    {
      id: 2,
      name: "Sprite summer campaign",
      description: "New basketball promotion",
      selected: false,
      flaggedDelete: false,
      current: false
    },
    // {
    //   id: 3,
    //   name: "Fanta summer campaign",
    //   description: "Renewed comedy promotion",
    //   selected: false,
    //   flaggedDelete: false,
    //   current: false
    // },
    {
      id: 4,
      name: "Diet Coke summer campaign",
      description: "Continued lifestyle promotion",
      selected: false,
      flaggedDelete: false,
      current: false
    },
    {
      id: 5,
      name: "Coke Zero winter",
      description: "Xtreme sports tie-ins",
      selected: false,
      flaggedDelete: false,
      current: false
    }


  ];


}




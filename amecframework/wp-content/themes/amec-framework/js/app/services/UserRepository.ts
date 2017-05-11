/// <reference path="../_all.ts" />

declare var ajax_auth_object:any;

module aif {
  'use strict';

  interface IWpAjaxCall {
    action: string,
    security: string
  }

  interface IWpAjaxLoggedOutResponse {
    loggedOut:boolean
  }

  interface IWpAjaxUserResponse {
    loggedIn: boolean,
    userId: number,
    displayName: string,
    email: string,
    logOutNonce: string,
    message?:string,

  }

  interface IWpRestFrameworkListResponse {
    id: number;
    title: string;
    excerpt: string;
  }

  interface IWpNewUser extends IWpAjaxCall {

    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    organisation: string;
    jobTitle: string;
    contactNumber: string;
    locale: string;

  }

  interface IWpFrameworkPost {
    title: string;
    content: string;
    author: number;
    excerpt: string;
    type: string;
    status: string;
  }

  interface IWpFramePostResponse {
    id: number;
  }

  interface IWpLogin extends IWpAjaxCall {
    password: string;
    username: string;
  }

  export class UserRepository implements IUserRepository {

//wp_lostpassword_url()
    static $inject = ["$timeout", "$rootScope", '$cookies', '$http'];

    //For debug
    private startLoggedIn: boolean = false;

    public currentUser: AifUser;

    constructor(private $timeout: ng.ITimeoutService, private $rootScope: ng.IRootScopeService,
                private $cookies: ng.cookies.ICookiesService, private $http: ng.IHttpService) {

    }

    get(): ng.IPromise<AifUser> {

      let regUrl:string = ajax_auth_object.ajaxurl;
      let restUrl:string = ajax_auth_object.resturl + "aif/v1/userframeworks";
      let data:IWpAjaxCall = {
        action: 'ajaxloggedin',
        security: ajax_auth_object.logged_in_nonce
      };
      let user:AifUser = null;
      return this.$http.post(regUrl, data,
      ).then((response:ng.IHttpPromiseCallbackArg<IWpAjaxUserResponse>) => {

        if(response.data && response.data.loggedIn){
          let d = response.data;
          user = new AifUser(d.email, d.displayName,
              null,
              null,
              null,
              null,
              null
            );
          user.id = d.userId;
          let loggedC = this.$cookies.get("justloggedin");
          if(loggedC && loggedC.toString().toLowerCase() === "true"){
            user.justLoggedIn = true;
            this.$cookies.remove("justloggedin");
          }
          this.currentUser = user;
          return this.$http.get(restUrl);
        }

        return null;
      }, e => {
        return null;
      }).then((response:ng.IHttpPromiseCallbackArg<Array<IWpRestFrameworkListResponse>>) => {

        user.frameworks = response.data.map(f => new AifFramework(f.id, f.title, f.excerpt));

        return user;
      } )

      // return this.$timeout(() => {
      //   let cUser = this.$cookies.getObject("aifUser");
      //   if (cUser && cUser.email) {
      //     let matches = users.filter(u => u.email == cUser.email);
      //     if (matches.length) {
      //       let user = AifUser.createFromData(matches[0]);
      //       if (user.email === "mail@michaelishmael.com") {
      //         user.frameworks = userFrameworks;
      //         if(cUser.currentFrameworkId){
      //           user.setExistingFramework(cUser.currentFrameworkId);
      //         }
      //
      //       }
      //       this.currentUser = user;
      //       return user;
      //
      //   }
      //   else {
      //     return null;
      //   }
      // }
      // }
      // , 200);
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

    registerNewUser(user: AppUser): ng.IPromise<LoginResult> {

      let regUrl:string = ajax_auth_object.ajaxurl;
      let regUser:IWpNewUser = {
        action: 'ajaxregister',
        username: user.email,
        password: user.password,
        email: user.email,
        firstName: user.firstName,
        security: ajax_auth_object.register_nonce,
        lastName: user.lastName,
        organisation: user.organisation,
        jobTitle: user.jobTitle,
        contactNumber: user.contactNumber,
        locale: user.language
      };

      return this.$http.post(regUrl, regUser).then((r:ng.IHttpPromiseCallbackArg<IWpAjaxUserResponse>) => {
        if(r.data && r.data.loggedIn){
          let newUser = new AifUser(
              user.email,
              user.firstName,
              user.lastName,
              user.organisation,
              user.jobTitle,
              user.language,
              user.contactNumber,

          );

          newUser.id = r.data.userId;
          this.currentUser = newUser;
          this.$cookies.put("justloggedin", "true");
          this.$rootScope.$broadcast("user:loggedIn", newUser);
          return new LoginResult(true, newUser, null);
        }
        return new LoginResult(false, null, "Registration error");
      },
      e => {
        return new LoginResult(false, null, e.statusText);
      }

      );

/*      return this.$timeout(() => {

        let newUser = new AifUser(
          user.email,
          user.firstName,
          user.lastName,
          user.organisation,
          user.jobTitle,
          user.language,
          user.contactNumber
        );

        this.currentUser = newUser;
        this.$rootScope.$broadcast("user:loggedIn", newUser);
        this.storeUser();
        return new LoginResult(true, newUser, null);

      });*/
    }

    logout(): ng.IPromise<boolean> {
      let regUrl:string = ajax_auth_object.ajaxurl;
      let regUser:IWpAjaxCall = {
        action: 'ajaxlogout',
        security: ajax_auth_object.logout_nonce

      };

      return this.$http.post(regUrl, regUser,
      ).then((response:ng.IHttpPromiseCallbackArg<IWpAjaxLoggedOutResponse>) => {

        this.currentUser = null;
        this.$rootScope.$broadcast("user:loggedOut");
                return !(response.data && !response.data.loggedOut);

      }, e => {
        return false;
      });
    }

    sendPasswordLink(email:string): ng.IPromise<boolean> {
      return this.$timeout(() => {

        //TODO: password link
        return true;
      });
    }

    login(email: string, password: string): ng.IPromise<LoginResult> {

      let regUrl:string = ajax_auth_object.ajaxurl;
      let regUser:IWpLogin = {
        action: 'ajaxlogin',
        username: email,
        password: password,
        security: ajax_auth_object.login_nonce

      };

      return this.$http.post(regUrl, regUser,
          ).then((r:ng.IHttpPromiseCallbackArg<IWpAjaxUserResponse>) => {

        if(r.data && r.data.loggedIn){
          let newUser = new AifUser(
              email, r.data.displayName, null, null, null, null, null
          );
          this.currentUser = newUser;
          ajax_auth_object.logout_nonce = r.data.logOutNonce;
          this.$cookies.put("justloggedin", "true");
          this.$rootScope.$broadcast("user:loggedIn", newUser);
          return new LoginResult(true, newUser, null);
        }
        return new LoginResult(false, null, r.data.message);
      },
      e => {

        return new LoginResult(false, null, e.statusText);
      }

      );



/*      return this.$timeout(() => {
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

      }, 200);*/

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

      let regUrl:string = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/';
      let data:IWpFrameworkPost = {
        title: name,
        content: description,
        author: this.currentUser.id,
        excerpt: description,
        type: "aif_workflow",
        status: "publish"
      };

      return this.$http.post(regUrl, JSON.stringify(data),
      ).then((response:ng.IHttpPromiseCallbackArg<IWpFramePostResponse>) => {

        let postId = response.data.id;
        let framework = new AifFramework(postId, name, description);
        this.currentUser.frameworks.push(framework);
        return new SaveFrameworkResult(true, framework, null);

      }, e => {
        return new SaveFrameworkResult(false, null, e.statusText);
      });
/*
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

      }, 200);*/
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
      language: "en",
      contactNumber: "07866 627 323"
    },
    {
      email: "mail@michaelishmael.com",
      firstName: "Michael",
      lastName: "Ishmael",
      organisation: "66 Bytes",
      jobTitle: "Director",
      language: "en",
      contactNumber: "07866 627 323"
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




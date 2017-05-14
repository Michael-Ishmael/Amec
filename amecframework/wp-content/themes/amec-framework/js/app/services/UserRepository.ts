/// <reference path="../_all.ts" />

declare var ajax_auth_object: any;

module aif {
    'use strict';

    interface IWpAjaxCall {
        action: string,
        security: string
    }

    interface IWpAjaxLoggedOutResponse {
        loggedOut: boolean
    }

    interface IWpAjaxUserResponse {
        loggedIn: boolean,
        userId: number,
        displayName: string,
        email: string,
        logOutNonce: string,
        message?: string,

    }

    interface IWpRestFrameworkResponse {
        id: number;
        title: {
            rendered : string;
        };
        excerpt: {
            rendered : string;
        };
        content_json:string
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
        static $inject = ["$timeout", "$rootScope", '$cookies', '$http', '$q'];


        //For debug
        private startLoggedIn: boolean = false;

        public currentUser: AifUser;
        public currentUserFramework: AifUserFramework;
        private frameworkService: IFrameworkRepository;

        constructor(private $timeout: ng.ITimeoutService, private $rootScope: ng.IRootScopeService,
                    private $cookies: ng.cookies.ICookiesService, private $http: ng.IHttpService, private $q: ng.IQService) {

            this.currentUserFramework = this.getEmptyUserFramework();

        }

        private getEmptyUserFramework():AifUserFramework {

            let emptyData:IAifUserFramework = { inputs: {} };
            return new AifUserFramework(-1, emptyData)

        }

        public setFrameworkService(service: IFrameworkRepository):void {
            this.frameworkService = service;
        }

        get(): ng.IPromise<AifUser> {

            let loggedIn = this.$cookies.get("aifloggedin");
            if(!loggedIn){
                this.getUser(true); //Attempt a get user anyway as might have cleared cookie
                return this.$q.when(null);
            }

            return this.getUser();

        }

        private getUser(broadcastLogin:boolean = false):ng.IPromise<AifUser> {

            let regUrl: string = ajax_auth_object.ajaxurl;
            let restUrl: string = ajax_auth_object.resturl + "aif/v1/userframeworks";
            let data: IWpAjaxCall = {
                action: 'ajaxloggedin',
                security: ajax_auth_object.logged_in_nonce
            };
            let user: AifUser = null;
            let currentFrameworkId:number = -1;

            return this.$http.post(regUrl, data,
            ).then((response: ng.IHttpPromiseCallbackArg<IWpAjaxUserResponse>) => {

                if (response.data && response.data.loggedIn) {
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
                    if (loggedC && loggedC.toString().toLowerCase() === "true") {
                        user.justLoggedIn = true;
                        this.$cookies.remove("justloggedin");
                    }
                    this.currentUser = user;
                    if(broadcastLogin){
                        this.$cookies.put("aifloggedin", "true");
                        this.$rootScope.$broadcast("user:loggedIn", user);
                    }
                    currentFrameworkId = this.getFrameworkCookie() || -1;
                    return this.$http.get(restUrl);
                }

                return null;
            }, e => {
                return null;
            }).then((response: ng.IHttpPromiseCallbackArg<Array<IWpRestFrameworkListResponse>>) => {

                if (user) {
                    user.frameworks = response.data.map(f => new AifFramework(f.id, f.title, f.excerpt));
                }

                if(currentFrameworkId > -1) return this.loadFramework(currentFrameworkId);

                return null;

            }).then((response: any) => {

                return user;
            })
        }

        save(): ng.IPromise<SaveFrameworkResult> {

            if (!this.currentUser) {
                return this.$q.when(new SaveFrameworkResult(false, null, "User not logged in"));
            }

            if (!this.currentUser.currentFramework) {
                return this.$q.when(new SaveFrameworkResult(false, null, "No framework to save"));
            }else {
                let regUrl: string = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/' + this.currentUser.currentFramework.id;
                let data: IWpFrameworkPost = {
                    title: this.currentUser.currentFramework.name,
                    content: JSON.stringify( this.currentUserFramework.asJsonObj()),
                    author: this.currentUser.id,
                    excerpt: this.currentUser.currentFramework.description,
                    type: "aif_workflow",
                    status: "publish"
                };

                return this.$http.post(regUrl, JSON.stringify(data),
                ).then((response: ng.IHttpPromiseCallbackArg<IWpFramePostResponse>) => {

                    let postId = response.data.id;
                    let framework = this.currentUser.currentFramework;
                    return new SaveFrameworkResult(true, framework, null);

                }, e => {
                    return new SaveFrameworkResult(false, null, e.statusText);
                });
            }

        }

        registerNewUser(user: AppUser): ng.IPromise<LoginResult> {

            let regUrl: string = ajax_auth_object.ajaxurl;
            let regUser: IWpNewUser = {
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

            return this.$http.post(regUrl, regUser).then((r: ng.IHttpPromiseCallbackArg<IWpAjaxUserResponse>) => {
                    if (r.data && r.data.loggedIn) {
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
                        this.$cookies.put("aifloggedin", "true");
                        this.currentUser = newUser;
                        this.$cookies.put("justloggedin", "true");
                        this.$rootScope.$broadcast("user:loggedIn", newUser);
                        return new LoginResult(true, newUser, null);
                    }
                    let message =  r.data.message || "Registration error";
                    return new LoginResult(false, null, message);
                },
                e => {
                    return new LoginResult(false, null, "Registration error");
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
            let regUrl: string = ajax_auth_object.ajaxurl;
            let regUser: IWpAjaxCall = {
                action: 'ajaxlogout',
                security: ajax_auth_object.logout_nonce

            };

            return this.$http.post(regUrl, regUser,
            ).then((response: ng.IHttpPromiseCallbackArg<IWpAjaxLoggedOutResponse>) => {
                this.$cookies.remove("aifloggedin");
                this.currentUser = null;
                this.$rootScope.$broadcast("user:loggedOut");
                return !(response.data && !response.data.loggedOut);

            }, e => {
                return false;
            });
        }

        sendPasswordLink(email: string): ng.IPromise<boolean> {
            return this.$timeout(() => {

                //TODO: password link
                return true;
            });
        }

        login(email: string, password: string): ng.IPromise<LoginResult> {

            let regUrl: string = ajax_auth_object.ajaxurl;
            let regUser: IWpLogin = {
                action: 'ajaxlogin',
                username: email,
                password: password,
                security: ajax_auth_object.login_nonce

            };

            return this.$http.post(regUrl, regUser,
            ).then((r: ng.IHttpPromiseCallbackArg<IWpAjaxUserResponse | any>) => {

                    if (r.data) {
                        if (r.data.loggedIn) {
                            this.$cookies.put("aifloggedin", "true");

                            let newUser = new AifUser(
                                email, r.data.displayName, null, null, null, null, null
                            );
                            this.currentUser = newUser;
                            ajax_auth_object.logout_nonce = r.data.logOutNonce;
                            this.$cookies.put("justloggedin", "true");
                            this.$rootScope.$broadcast("user:loggedIn", newUser);
                            return new LoginResult(true, newUser, null);
                        } else {
                            if(r.data == "0"){
                                this.logout().then(r => {
                                    window.location.href = window.location.href;
                                })
                            }
                            if(r.data.message && r.data.message.toLowerCase().indexOf('wrong username or password') > -1){
                                return new LoginResult(false, null, r.data.message);
                            }
                        }
                    }
                    return new LoginResult(false, null, null);
                },
                e => {

                    return new LoginResult(false, null, null);
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

        private storeUser() {
            // let userObj = {
            //     email: this.currentUser.email,
            //     currentFrameworkId: null
            // };
            // if (this.currentUser.currentFramework) userObj.currentFrameworkId = this.currentUser.currentFramework.id;
            // this.$cookies.putObject("aifUser", userObj);
        }


        createNewFramework(name: string, description: string): ng.IPromise<SaveFrameworkResult> {
            let hasUser = !!this.currentUser;

            let regUrl: string = ajax_auth_object.resturl + 'wp/v2/aifworkflows-api/';
            let data: IWpFrameworkPost = {
                title: name,
                content: JSON.stringify({ inputs: {}}),
                author: this.currentUser.id,
                excerpt: description,
                type: "aif_workflow",
                status: "publish"
            };

            return this.$http.post(regUrl, JSON.stringify(data),
            ).then((response: ng.IHttpPromiseCallbackArg<IWpFramePostResponse>) => {

                let postId = response.data.id;
                let framework = new AifFramework(postId, name, description);
                this.currentUser.frameworks.forEach(f => f.current = false);
                framework.current = true;
                this.currentUser.frameworks.push(framework);
                this.currentUser.currentFramework = framework;
                this.setFrameworkCookie(framework.id);
                this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
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

        saveOverFramework(id: number): ng.IPromise<SaveFrameworkResult> {
            let hasUser = !!this.currentUser;

            if(!hasUser){
                return this.$q.when<SaveFrameworkResult>(new SaveFrameworkResult(false, null, "User not logged in"));
            } else {


                let matches = this.currentUser.frameworks.filter(f => f.id === id);
                if (matches.length) {
                    let framework = matches[0];
                    this.currentUser.frameworks.forEach(f => f.current = false);
                    framework.current = true;
                    this.currentUser.currentFramework = framework;
                    this.setFrameworkCookie(framework.id);

                    return this.save().then(s => {

                        if(s.success){

                            this.$rootScope.$broadcast("framework:frameworkSwitched", framework);
                            return new SaveFrameworkResult(true, framework, "Framework selected")
                        } else {
                            return s;
                        }

                        },
                        e => {
                            return new SaveFrameworkResult(false, null, e.message);
                        }

                    );
                } else {

                    this.currentUser.currentFramework = null;
                    this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    let result = new SaveFrameworkResult(false, null, "No matching frameworks found");

                    return this.$q.when<SaveFrameworkResult>(result);

                }
/*

 let restUrl: string = ajax_auth_object.resturl + "wp/v2/aifworkflows-api/" + id;
 return this.$http.get(restUrl)
 .then((response: ng.IHttpPromiseCallbackArg<IWpRestFrameworkResponse>) => {

 let data:IAifUserFramework;
 try {
 data = JSON.parse(response.data.content_json);
 } catch(ex) {
 data = { "inputs" : {} }
 }

 this.currentUserFramework = new AifUserFramework(id, data);
 if(this.frameworkService) this.frameworkService.onFrameworkLoaded();
 this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
 this.storeUser();
 return new SaveFrameworkResult(true, framework, "Framework selected")
 });
* */

            }

        }

        private setFrameworkCookie(frameworkId:number){
            if(this.currentUser){
                this.$cookies.put("aifcurrentframework_" + this.currentUser.id, frameworkId.toString());
            }
        }

        private getFrameworkCookie():number{
            if(this.currentUser){
                let cookieString = this.$cookies.get("aifcurrentframework_" + this.currentUser.id);
                try{
                    return parseInt(cookieString);
                } catch (ex){
                    return null;
                }
            }
            return null;
        }

        loadFramework(id: number): ng.IPromise<SaveFrameworkResult> {
            let hasUser = !!this.currentUser;

            if(!hasUser){
                return this.$q.when<SaveFrameworkResult>(new SaveFrameworkResult(false, null, "User not logged in"));
            } else {

                let matches = this.currentUser.frameworks.filter(f => f.id === id);
                if (matches.length) {
                    let framework = matches[0];
                    this.currentUser.frameworks.forEach(f => f.current = false);
                    framework.current = true;
                    this.setFrameworkCookie(framework.id);

                    this.currentUser.currentFramework = framework;
                    let restUrl: string = ajax_auth_object.resturl + "wp/v2/aifworkflows-api/" + id;
                    return this.$http.get(restUrl)
                        .then((response: ng.IHttpPromiseCallbackArg<IWpRestFrameworkResponse>) => {

                            let data:IAifUserFramework;
                            try {
                                data = JSON.parse(response.data.content_json);
                            } catch(ex) {
                                data = { "inputs" : {} }
                            }

                            this.currentUserFramework = new AifUserFramework(id, data);
                            if(this.frameworkService) this.frameworkService.onFrameworkLoaded();
                            this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                            return new SaveFrameworkResult(true, framework, "Framework selected")
                        });

                } else {

                    this.currentUser.currentFramework = null;
                    this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    let result = new SaveFrameworkResult(false, null, "No matching frameworks found");

                    return this.$q.when<SaveFrameworkResult>(result);

                }


            }
        }

        deleteFramework(id: number): ng.IPromise<boolean> {
            let hasUser = !!this.currentUser;

            if(!hasUser){
                return this.$q.when<boolean>(false);
            } else {
                let foundIndex = -1;
                let foundFramework:AifFramework = null;
                this.currentUser.frameworks.forEach((f, i) => {
                    if (f.id == id) {
                        foundFramework = f;
                        foundIndex = i;
                    }
                });

                if(foundFramework) {

                    if (this.currentUser.currentFramework == foundFramework) {
                        this.currentUser.currentFramework = null;
                        this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    }
                    this.currentUser.frameworks.splice(foundIndex, 1);

                    let restUrl: string = ajax_auth_object.resturl + "wp/v2/aifworkflows-api/" + id;
                    return this.$http.delete(restUrl)
                        .then((response: ng.IHttpPromiseCallbackArg<IWpRestFrameworkResponse>) => {


                            return true;
                        }, e => {
                            console.log(e.statusText);
                            return false;
                        });
                } else {

                    return this.$q.when<boolean>(false);
                }


            }
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
    /*
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
     */

}




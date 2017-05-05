/// <reference path="../_all.ts" />
/*

  New User

    Login -> don't have an account? -> register
    Register -> create subscriber + meta, return user object
        username
        password
        First Name
        Last Name
        Job Title
        Company
        Language

        -> User logged in
        -> No frameworks -> create new framework


  Existing User

     Register -> already registered -> forgot password?
     Forgot details
     Successful Login

        -> User logged in

        Has saved frameworks?

          Yes
          -> List existing
          -> or create new

          No
          -> No frameworks -> create new framework


    Create new framework

      Name
      Description


    Save frame work

        User logged in?
          No -> You need to log in to save.  User login below or register as a new amec user

          Yes ->

          Framework loaded?

            Yes?

            Save as xxxx dropdown or create new


            No ?

              Has other frameworks?

                No?

                Create new (limit)

                Yes?

                Create new or save over existing








* */
var aif;
(function (aif) {
    'use strict';
    var AifApp = (function () {
        function AifApp() {
            this.maxFrameworks = 3;
            this.user = null;
        }
        Object.defineProperty(AifApp.prototype, "loggedIn", {
            get: function () {
                return this.user !== null;
            },
            enumerable: true,
            configurable: true
        });
        return AifApp;
    }());
    aif.AifApp = AifApp;
    var AifFramework = (function () {
        function AifFramework(name, description) {
            this.name = name;
            this.description = description;
        }
        return AifFramework;
    }());
    aif.AifFramework = AifFramework;
    var AifUser = (function () {
        function AifUser(userName, firstName, lastName, organisation, jobTitle, country) {
            this.userName = userName;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.country = country;
            this.frameworks = [];
        }
        Object.defineProperty(AifUser.prototype, "hasFrameworks", {
            get: function () {
                return this.firstName.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        return AifUser;
    }());
    aif.AifUser = AifUser;
})(aif || (aif = {}));

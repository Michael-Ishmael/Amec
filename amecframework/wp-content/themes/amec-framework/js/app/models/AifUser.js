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
        AifApp.prototype.loggedIn = function () {
            return this.user !== null;
        };
        return AifApp;
    }());
    aif.AifApp = AifApp;
    var AppUser = (function () {
        function AppUser(email, firstName, lastName, organisation, jobTitle, language, contactNumber) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.contactNumber = contactNumber;
            this.password = null;
            this.passwordConfirmation = null;
        }
        return AppUser;
    }());
    aif.AppUser = AppUser;
    var AifUser = (function () {
        function AifUser(email, firstName, lastName, organisation, jobTitle, language, contactNumber) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.organisation = organisation;
            this.jobTitle = jobTitle;
            this.language = language;
            this.contactNumber = contactNumber;
            this.frameworks = [];
            this.currentFramework = null;
        }
        AifUser.prototype.hasExistingFrameworks = function () {
            return this.frameworks != null && this.frameworks.length > 0;
        };
        AifUser.prototype.setExistingFramework = function (id) {
            var matches = this.frameworks.filter(function (f) { return f.id === id; });
            if (matches.length) {
                this.currentFramework = matches[0];
            }
            else {
                this.currentFramework = null;
            }
        };
        AifUser.prototype.addNewFramework = function (newFramework) {
            this.frameworks.push(newFramework);
            this.currentFramework = newFramework;
        };
        AifUser.prototype.hasFrameworks = function () {
            return this.firstName.length > 0;
        };
        AifUser.prototype.asAppUser = function () {
            return new AppUser(this.email, this.firstName, this.lastName, this.organisation, this.jobTitle, this.language, this.contactNumber);
        };
        AifUser.createFromData = function (data) {
            return new AifUser(data.email, data.firstName, data.lastName, data.organisation, data.jobTitle, data.language, data.contactNumber);
        };
        return AifUser;
    }());
    aif.AifUser = AifUser;
    var LoginResult = (function () {
        function LoginResult(success, user, message) {
            this.success = success;
            this.user = user;
            this.message = message;
        }
        return LoginResult;
    }());
    aif.LoginResult = LoginResult;
})(aif || (aif = {}));

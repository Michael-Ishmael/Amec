/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountCtrl = (function () {
        function AccountCtrl($window, $sce, aifService) {
            this.$window = $window;
            this.$sce = $sce;
            this.aifService = aifService;
            this.loginFailure = false;
            this.message = null;
            this.displayLogic = null;
            this.userModel = null;
            this.initialised = false;
            this.currentFramework = null;
            this.savedFrameworkModel = null;
            this.init();
        }
        AccountCtrl.prototype.init = function () {
            var _this = this;
            var self = this;
            this.aifService.getApp().then(function (a) {
                self.app = a;
                if (a && a.user) {
                    _this.userModel = a.user.asAppUser();
                }
                else {
                    _this.userModel = new aif.AppUser(null, null, null, null, null, null);
                }
                _this.initialised = true;
            });
            this.displayLogic = new LoginDisplayLogic(this.$sce);
        };
        AccountCtrl.prototype.isLoggedIn = function () {
            return !!(this.app && this.app.user);
        };
        AccountCtrl.prototype.showLogin = function () {
            this.displayLogic.showLogin();
        };
        AccountCtrl.prototype.showForgottenDetails = function () {
            this.displayLogic.showForgottenDetails();
        };
        AccountCtrl.prototype.hideLoginBox = function () {
            this.displayLogic.hideLoginDisplay();
        };
        AccountCtrl.prototype.showRegister = function () {
            this.displayLogic.showRegister();
        };
        AccountCtrl.prototype.saveProgress = function () {
            this.displayLogic.attemptSave(this.isLoggedIn());
        };
        AccountCtrl.prototype.login = function (form) {
            if (form) {
                if (!form.$valid)
                    return;
                form.$setPristine();
                form.$setUntouched();
            }
            else {
                return;
            }
            var self = this;
            this.aifService.login(this.userModel.email, this.userModel.password).then(function (r) {
                if (!r.success) {
                    self.loginFailure = true;
                    self.message = r.message;
                }
                else {
                    self.userModel = r.user.asAppUser();
                    self.savedFrameworkModel = new SavedFrameworkModel();
                    self.displayLogic.showSelectFramework(self.app.user.hasExistingFrameworks());
                }
            }).catch(function (r) {
                self.loginFailure = true;
                self.message = r.message;
            });
        };
        AccountCtrl.prototype.registerNewUser = function (form) {
            if (!form.$valid)
                return;
            this.hideLoginBox();
        };
        AccountCtrl.prototype.loadOrCreateFramework = function (form) {
            if (!form.$valid)
                return;
            if (this.savedFrameworkModel.existingFrameworkId > -1) {
                var self_1 = this;
                var matches = this.app.user.frameworks.filter(function (f) { return f.id === self_1.savedFrameworkModel.existingFrameworkId; });
                if (matches.length)
                    this.currentFramework = matches[0];
            }
            else if (this.savedFrameworkModel.newFrameworkName !== null) {
                if (this.app.user.frameworks === null)
                    this.app.user.frameworks = [];
                var newId = this.app.user.frameworks.length + 1;
                var newFramework = new aif.AifFramework(newId, this.savedFrameworkModel.newFrameworkName, this.savedFrameworkModel.newFrameworkDescription);
                this.app.user.frameworks.push(newFramework);
                this.currentFramework = newFramework;
            }
            this.hideLoginBox();
        };
        AccountCtrl.prototype.logout = function () {
            var self = this;
            this.displayLogic.hideLoginDisplay();
            this.aifService.logout().then(function (b) {
                if (b) {
                    //this.$window.location.href = "";
                    window.location.href = window.location.href;
                }
            });
        };
        return AccountCtrl;
    }());
    AccountCtrl.$inject = ["$window", "$sce", "aifService"];
    aif.AccountCtrl = AccountCtrl;
    var SavedFrameworkModel = (function () {
        function SavedFrameworkModel() {
            this.existingFrameworkId = -1;
            this.createNew = false;
            this.newFrameworkName = null;
            this.newFrameworkDescription = null;
        }
        return SavedFrameworkModel;
    }());
    aif.SavedFrameworkModel = SavedFrameworkModel;
    var LoginDisplayLogic = (function () {
        function LoginDisplayLogic($sce) {
            this.$sce = $sce;
            this.MESSAGES = {
                DEFAULT_LOGIN_Q: "New here?",
                DEFAULT_LOGIN_A: "Create an account",
                SAVE_ATTEMPT_LOGIN_Q: "You need to be logged in to save progress.<br>Log in below or",
                SAVE_ATTEMPT_LOGIN_A: "click here to create an account",
                OR_CREATE_NEW_FRAMEWORK: "...or create a new framework",
                JUST_CREATE_NEW_FRAMEWORK: "Use the fields below create a new framework"
            };
            this.fadeBg = false;
            this.displayLogin = false;
            this.loginGrayed = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.MESSAGES.DEFAULT_LOGIN_Q;
            this.loginMessageA = this.MESSAGES.DEFAULT_LOGIN_A;
            this.createMessage = this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK;
            this.reset();
        }
        LoginDisplayLogic.prototype.showLogin = function () {
            this.reset();
            this.fadeBg = true;
            this.displayLogin = true;
        };
        LoginDisplayLogic.prototype.showSelectFramework = function (hasExisting) {
            this.reset();
            this.fadeBg = true;
            this.displayLogin = true;
            this.loginGrayed = true;
            this.displaySelectFramework = true;
            this.hasExistingFrameworks = hasExisting;
            if (hasExisting)
                this.createMessage = this.MESSAGES.OR_CREATE_NEW_FRAMEWORK;
        };
        LoginDisplayLogic.prototype.showForgottenDetails = function () {
            this.reset();
            this.fadeBg = true;
            this.displayFtnDetails = true;
        };
        LoginDisplayLogic.prototype.hideLoginDisplay = function () {
            this.reset();
        };
        LoginDisplayLogic.prototype.showRegister = function () {
            this.reset();
            this.fadeBg = true;
            this.displayRegister = true;
        };
        LoginDisplayLogic.prototype.attemptSave = function (loggedIn) {
            this.reset();
            this.fadeBg = true;
            if (!loggedIn) {
                this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.SAVE_ATTEMPT_LOGIN_Q);
                this.loginMessageA = this.MESSAGES.SAVE_ATTEMPT_LOGIN_A;
                this.displayLogin = true;
                return;
            }
            this.displaySave = true;
        };
        LoginDisplayLogic.prototype.reset = function () {
            this.fadeBg = false;
            this.displayLogin = false;
            this.loginGrayed = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_Q);
            this.loginMessageA = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_A);
            this.createMessage = this.$sce.trustAsHtml(this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK);
        };
        return LoginDisplayLogic;
    }());
    aif.LoginDisplayLogic = LoginDisplayLogic;
})(aif || (aif = {}));

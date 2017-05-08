/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountDisplayRoute;
    (function (AccountDisplayRoute) {
        AccountDisplayRoute[AccountDisplayRoute["FromLogin"] = 0] = "FromLogin";
        AccountDisplayRoute[AccountDisplayRoute["FromSave"] = 1] = "FromSave";
        AccountDisplayRoute[AccountDisplayRoute["FromViewAccount"] = 2] = "FromViewAccount";
    })(AccountDisplayRoute = aif.AccountDisplayRoute || (aif.AccountDisplayRoute = {}));
    var ViewService = (function () {
        function ViewService($sce) {
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
            this.displayAccount = false;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.MESSAGES.DEFAULT_LOGIN_Q;
            this.loginMessageA = this.MESSAGES.DEFAULT_LOGIN_A;
            this.reset();
        }
        ViewService.prototype.showLogin = function (fromSave) {
            if (fromSave === void 0) { fromSave = false; }
            this.reset();
            this.fadeBg = true;
            if (fromSave)
                this.accountDisplayRoute = AccountDisplayRoute.FromSave;
            this.displayLogin = true;
        };
        ViewService.prototype.showAccount = function (route) {
            this.reset();
            this.fadeBg = true;
            this.displayAccount = true;
            this.accountDisplayRoute = route;
        };
        ViewService.prototype.showCreateFramework = function (route, hasExisting) {
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
            this.accountDisplayRoute = route;
            this.hasExistingFrameworks = hasExisting;
        };
        ViewService.prototype.showForgottenDetails = function () {
            this.reset();
            this.fadeBg = true;
            this.displayFtnDetails = true;
        };
        ViewService.prototype.resetView = function () {
            this.reset();
        };
        ViewService.prototype.showRegister = function () {
            this.reset();
            this.fadeBg = true;
            this.displayRegister = true;
        };
        ViewService.prototype.attemptSave = function (loggedIn, hasExisting) {
            if (hasExisting === void 0) { hasExisting = false; }
            this.reset();
            this.fadeBg = true;
            if (!loggedIn) {
                this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.SAVE_ATTEMPT_LOGIN_Q);
                this.loginMessageA = this.MESSAGES.SAVE_ATTEMPT_LOGIN_A;
                this.displayLogin = true;
                return;
            }
            else {
                this.accountDisplayRoute = AccountDisplayRoute.FromSave;
                if (hasExisting) {
                    this.displaySaveAs = true;
                }
                else {
                    this.displayCreate = true;
                }
            }
        };
        ViewService.prototype.showCreate = function (hasExisting) {
            if (hasExisting === void 0) { hasExisting = false; }
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
        };
        ViewService.prototype.reset = function () {
            this.fadeBg = false;
            this.displayLogin = false;
            this.displayAccount = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_Q);
            this.loginMessageA = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_A);
        };
        return ViewService;
    }());
    ViewService.$inject = ["$sce"];
    aif.ViewService = ViewService;
})(aif || (aif = {}));

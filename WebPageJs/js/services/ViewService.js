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
            this.fadeBg = false;
            this.displayEdit = false;
            this.displayLogin = false;
            this.displayAccount = false;
            this.displayCreate = false;
            this.displaySaveAs = false;
            this.accountDisplayRoute = AccountDisplayRoute.FromViewAccount;
            this.displayFtnDetails = false;
            this.displayGrid = true;
            this.displaySummary = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.reset();
        }
        ViewService.prototype.showSummary = function () {
            this.reset();
            this.displaySummary = true;
            this.displayGrid = false;
        };
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
            this.accountDisplayRoute = AccountDisplayRoute.FromSave;
            if (!loggedIn) {
                this.displayLogin = true;
                return;
            }
            else {
                if (hasExisting) {
                    this.displaySaveAs = true;
                }
                else {
                    this.displayCreate = true;
                }
            }
        };
        ViewService.prototype.showEdit = function () {
            this.reset();
            this.displayEdit = true;
            this.fadeBg = true;
        };
        ViewService.prototype.showCreate = function (hasExisting) {
            if (hasExisting === void 0) { hasExisting = false; }
            this.reset();
            this.fadeBg = true;
            this.displayCreate = true;
        };
        ViewService.prototype.reset = function () {
            this.fadeBg = false;
            this.displayEdit = false;
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
        };
        return ViewService;
    }());
    ViewService.$inject = ["$sce"];
    aif.ViewService = ViewService;
})(aif || (aif = {}));

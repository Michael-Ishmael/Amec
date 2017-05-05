/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountCtrl = (function () {
        function AccountCtrl($window, aifService) {
            this.$window = $window;
            this.aifService = aifService;
            this.loginFailure = false;
            this.message = null;
            this.displayLogin = false;
            var self = this;
            this.aifService.getApp().then(function (a) { return self.app = a; });
        }
        AccountCtrl.prototype.isLoggedIn = function () {
            return !!(this.app && this.app.user);
        };
        AccountCtrl.prototype.showLogin = function () {
            this.displayLogin = true;
        };
        AccountCtrl.prototype.login = function () {
            var self = this;
            this.aifService.login("michaelio", "test").then(function (r) {
                if (!r.success) {
                    self.loginFailure = true;
                    self.message = r.message;
                }
            });
        };
        AccountCtrl.prototype.logout = function () {
            var self = this;
            this.aifService.logout().then(function (b) {
                if (b) {
                    //this.$window.location.href = "";
                    window.location.href = window.location.href;
                }
            });
        };
        return AccountCtrl;
    }());
    AccountCtrl.$inject = ["$window", "aifService"];
    aif.AccountCtrl = AccountCtrl;
})(aif || (aif = {}));

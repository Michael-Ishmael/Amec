/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AifService = (function () {
        function AifService($timeout, userRepository) {
            this.$timeout = $timeout;
            this.userRepository = userRepository;
        }
        AifService.prototype.getApp = function () {
            var self = this;
            if (self.app == null) {
                return self.buildApp().then(function (a) { return self.app = a; });
            }
            return this.$timeout(function () {
                return self.app;
            });
        };
        AifService.prototype.login = function (username, password) {
            var self = this;
            return this.userRepository.login(username, password).then(function (r) {
                self.user = r.user;
                self.app.user = r.user;
                return r;
            });
        };
        AifService.prototype.logout = function () {
            var _this = this;
            return this.userRepository.logout().then(function (b) {
                return _this.app.user = null;
            });
        };
        AifService.prototype.buildApp = function () {
            var _this = this;
            return this.userRepository.get().then(function (u) {
                _this.user = u;
                _this.app = new aif.AifApp();
                _this.app.user = u;
                return _this.app;
            });
        };
        return AifService;
    }());
    AifService.$inject = ["$timeout", "userRepository"];
    aif.AifService = AifService;
})(aif || (aif = {}));

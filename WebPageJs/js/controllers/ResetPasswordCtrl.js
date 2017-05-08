/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var ResetPasswordCtrl = (function () {
        function ResetPasswordCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.init();
        }
        ResetPasswordCtrl.prototype.init = function () {
        };
        ResetPasswordCtrl.prototype.resend = function () {
            this.linkSent = false;
        };
        ResetPasswordCtrl.prototype.sendReset = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            this.userRepository.sendPasswordLink(this.email).then(function (s) {
                if (s) {
                    _this.linkSent = true;
                }
            });
        };
        return ResetPasswordCtrl;
    }());
    ResetPasswordCtrl.$inject = ["viewService", "userRepository"];
    aif.ResetPasswordCtrl = ResetPasswordCtrl;
})(aif || (aif = {}));

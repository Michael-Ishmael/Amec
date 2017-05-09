/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var RegisterCtrl = (function () {
        function RegisterCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.loginFailure = false;
            this.loginMessage = null;
            this.showNeedMessage = false;
            this.userModel = null;
            this.init();
        }
        RegisterCtrl.prototype.init = function () {
            this.userModel = new aif.AppUser(null, null, null, null, null, null, null);
        };
        RegisterCtrl.prototype.registerNewUser = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            this.userRepository.registerNewUser(this.userModel).then(function (r) {
                if (r.success) {
                    _this.vs.resetView();
                }
                else {
                    //TODO: display error
                }
            });
        };
        return RegisterCtrl;
    }());
    RegisterCtrl.$inject = ["viewService", "userRepository"];
    aif.RegisterCtrl = RegisterCtrl;
})(aif || (aif = {}));

var aif;
(function (aif) {
    'use strict';
    var LoginCtrl = (function () {
        function LoginCtrl(vs, userRepository) {
            this.vs = vs;
            this.userRepository = userRepository;
            this.loginFailure = false;
            this.loginMessage = null;
            this.showNeedMessage = false;
            this.init();
        }
        LoginCtrl.prototype.init = function () {
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave) {
                this.showNeedMessage = true;
            }
        };
        LoginCtrl.prototype.login = function (form) {
            var _this = this;
            if (form) {
                if (!form.$valid)
                    return;
                form.$setPristine();
                form.$setUntouched();
            }
            else {
                return;
            }
            this.userRepository.login(this.email, this.password).then(function (r) {
                if (!r.success) {
                    _this.loginFailure = true;
                    _this.loginMessage = r.message;
                }
                else {
                    if (r.user.hasExistingFrameworks())
                        _this.vs.showAccount(aif.AccountDisplayRoute.FromLogin);
                    else {
                        _this.vs.showCreateFramework(aif.AccountDisplayRoute.FromLogin, false);
                    }
                }
            }).catch(function (r) {
                _this.loginFailure = true;
                _this.loginMessage = r.message;
            });
        };
        return LoginCtrl;
    }());
    LoginCtrl.$inject = ["viewService", "userRepository"];
    aif.LoginCtrl = LoginCtrl;
})(aif || (aif = {}));

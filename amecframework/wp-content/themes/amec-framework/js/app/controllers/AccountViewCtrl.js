var aif;
(function (aif) {
    'use strict';
    var AccountViewCtrl = (function () {
        function AccountViewCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "Your account";
            this.user = null;
            this.createMessage = "Use the fields below create a new framework.";
            this.colors = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];
            this.init();
        }
        AccountViewCtrl.prototype.getColorClass = function (prefix, index) {
            if (index === void 0) { index = 0; }
            if (index > this.colors.length - 1)
                index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        };
        AccountViewCtrl.prototype.init = function () {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin();
                return;
            }
            this.user = this.userRepository.currentUser;
            if (this.user.hasExistingFrameworks()) {
                this.createMessage = "...or create a new framework.";
            }
            this.setTitle(this.vs.accountDisplayRoute);
        };
        AccountViewCtrl.prototype.logout = function () {
            this.closeView();
            this.userRepository.logout().then(function (b) {
                if (b) {
                    //this.$window.location.href = "";
                    //window.location.href = window.location.href;
                }
            });
        };
        AccountViewCtrl.prototype.setTitle = function (displayRoute) {
            switch (displayRoute) {
                case aif.AccountDisplayRoute.FromLogin:
                    this.title = "Log in successful!";
                    break;
                case aif.AccountDisplayRoute.FromSave:
                    this.title = "Save framework";
                    break;
                case aif.AccountDisplayRoute.FromViewAccount:
                default:
                    // do nothing
                    break;
            }
        };
        AccountViewCtrl.prototype.closeView = function () {
            this.user.frameworks.forEach(function (f) { return f.selected = false; });
            this.user.frameworks.forEach(function (f) { return f.flaggedDelete = false; });
            this.vs.resetView();
        };
        AccountViewCtrl.prototype.loadSelectedFramework = function () {
            var _this = this;
            if (this.user && this.frameworkIsSelected()) {
                var selected = this.user.frameworks.filter(function (f) { return f.selected; })[0];
                this.userRepository.setExistingFramework(selected.id).then(function (r) {
                    if (r.success) {
                        _this.closeView();
                    }
                    else {
                    }
                });
            }
        };
        AccountViewCtrl.prototype.showCreateFramework = function () {
            this.vs.showCreate(this.user.hasExistingFrameworks());
        };
        AccountViewCtrl.prototype.frameworkIsSelected = function () {
            return this.user.frameworks.some(function (f) { return f.selected; });
        };
        AccountViewCtrl.prototype.deleteFramework = function ($event, framework) {
            this.userRepository.deleteFramework(framework.id).then(function (s) {
                if (!s) {
                    framework.flaggedDelete = false;
                    //TODO: message failure
                }
            });
            $event.preventDefault();
        };
        AccountViewCtrl.prototype.toggleSelectFramework = function (framework) {
            if (framework.selected) {
                framework.selected = false;
            }
            else {
                this.user.frameworks.forEach(function (f) { return f.selected = false; });
                framework.selected = true;
            }
        };
        AccountViewCtrl.prototype.toggleFlagDeleteFramework = function ($event, framework) {
            framework.flaggedDelete = !framework.flaggedDelete;
        };
        return AccountViewCtrl;
    }());
    AccountViewCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.AccountViewCtrl = AccountViewCtrl;
})(aif || (aif = {}));

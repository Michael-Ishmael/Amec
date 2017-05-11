var aif;
(function (aif) {
    'use strict';
    var SaveAsCtrl = (function () {
        function SaveAsCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "Your account";
            this.user = null;
            this.currentFramework = null;
            this.altMessage = "S";
            this.exInc = 0;
            this.saveUnsuccessful = false;
            this.saveFailMessage = null;
            this.colors = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];
            this.init();
        }
        SaveAsCtrl.prototype.getColorClass = function (prefix, index) {
            if (index === void 0) { index = 0; }
            if (index > this.colors.length - 1)
                index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        };
        SaveAsCtrl.prototype.init = function () {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin(true);
                return;
            }
            this.user = this.userRepository.currentUser;
            if (this.user.currentFramework) {
                this.currentFramework = this.user.currentFramework;
                this.toggleSelectFramework(this.currentFramework);
                this.altMessage = "Alternatively, s";
                this.exInc = 1;
            }
            this.setTitle(this.vs.accountDisplayRoute);
        };
        SaveAsCtrl.prototype.setTitle = function (displayRoute) {
            this.title = "Save framework";
            if (this.currentFramework) {
            }
            else {
            }
        };
        SaveAsCtrl.prototype.saveAsSelectedFramework = function () {
            var _this = this;
            if (this.user && this.frameworkIsSelected()) {
                var selected = this.user.frameworks.filter(function (f) { return f.selected; })[0];
                this.userRepository.setExistingFramework(selected.id).then(function (s) {
                    if (s) {
                        _this.vs.resetView();
                    }
                });
            }
        };
        SaveAsCtrl.prototype.toggleSelectFramework = function (framework) {
            if (framework.selected) {
                framework.selected = false;
            }
            else {
                this.user.frameworks.forEach(function (f) { return f.selected = false; });
                framework.selected = true;
            }
        };
        SaveAsCtrl.prototype.frameworkIsSelected = function () {
            return this.user.frameworks.some(function (f) { return f.selected; });
        };
        return SaveAsCtrl;
    }());
    SaveAsCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.SaveAsCtrl = SaveAsCtrl;
})(aif || (aif = {}));

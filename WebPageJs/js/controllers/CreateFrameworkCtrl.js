/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var CreateFrameworkCtrl = (function () {
        function CreateFrameworkCtrl($scope, userRepository, vs) {
            this.$scope = $scope;
            this.userRepository = userRepository;
            this.vs = vs;
            this.title = "New Measurement Framework";
            this.user = null;
            this.existingFrameworkId = null;
            this.newFrameworkName = null;
            this.newFrameworkDescription = null;
            this.createMessage = " ";
            this.cancelButtonText = "Cancel";
            this.saveUnsuccessful = false;
            this.saveFailMessage = null;
            this.init();
        }
        CreateFrameworkCtrl.prototype.init = function () {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin();
                return;
            }
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromSave) {
                this.createMessage = "Create a new framework to save your progress.";
            }
            if (this.vs.accountDisplayRoute == aif.AccountDisplayRoute.FromLogin) {
                this.title = "Create your first framework";
                this.createMessage = "Create a new framework to store your progress.";
                this.cancelButtonText = "Skip for now";
            }
            this.user = this.userRepository.currentUser;
        };
        CreateFrameworkCtrl.prototype.createNewFramework = function (form) {
            var _this = this;
            if (!form.$valid)
                return;
            if (this.user) {
                this.userRepository.createNewFramework(this.newFrameworkName, this.newFrameworkDescription)
                    .then(function (r) {
                    if (r.success) {
                        _this.vs.resetView();
                    }
                    else {
                        _this.saveUnsuccessful = true;
                        _this.saveFailMessage = r.message;
                    }
                });
            }
        };
        return CreateFrameworkCtrl;
    }());
    CreateFrameworkCtrl.$inject = ["$scope", "userRepository", "viewService"];
    aif.CreateFrameworkCtrl = CreateFrameworkCtrl;
})(aif || (aif = {}));

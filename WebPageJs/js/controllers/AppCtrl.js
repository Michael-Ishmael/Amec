/// <///<reference path=".../_all.ts" />
var getEntireDom;
var downloadPDF;
var Tether;
var aif;
(function (aif) {
    'use strict';
    var AppCtrl = (function () {
        function AppCtrl($scope, $timeout, $sce, userRepository, vs) {
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.$sce = $sce;
            this.userRepository = userRepository;
            this.vs = vs;
            this.loginFailure = false;
            this.message = null;
            this.initialised = false;
            this.savedFrameworkModel = null;
            this.currentFramework = null;
            this.currentUser = null;
            this.displayAside = false;
            this.init();
        }
        AppCtrl.prototype.init = function () {
            var _this = this;
            this.$scope.$on("user:loggedIn", function (event, data) {
                _this.userLoggedChanged(data);
            });
            this.$scope.$on("user:loggedOut", function (event) {
                _this.userLoggedChanged(null);
            });
            this.$scope.$on("framework:frameworkUpdated", function (event, data) {
                _this.setCurrentFramework(data);
            });
            var self = this;
            this.userRepository.get().then(function (user) {
                if (user) {
                    _this.currentUser = user;
                    if (user.currentFramework)
                        _this.currentFramework = user.currentFramework;
                }
                _this.initialised = true;
                _this.$timeout(_this.doTether, 500);
            });
        };
        AppCtrl.prototype.doTether = function () {
            var tetherOptions = {
                attachment: "top left",
                element: "#register-reminder",
                target: "#register-button",
                targetAttachment: "bottom left"
            };
            var regTether = new Tether(tetherOptions);
        };
        AppCtrl.prototype.userLoggedChanged = function (user) {
            if (user) {
                this.currentUser = user;
                if (this.currentUser.currentFramework) {
                    this.setCurrentFramework(this.currentUser.currentFramework);
                }
            }
            else {
                this.currentUser = null;
                this.currentFramework = null;
            }
        };
        AppCtrl.prototype.setCurrentFramework = function (framework) {
            this.currentFramework = framework;
        };
        AppCtrl.prototype.isLoggedIn = function () {
            return !!this.currentUser;
        };
        AppCtrl.prototype.toggleAside = function () {
            this.displayAside = !this.displayAside;
        };
        AppCtrl.prototype.submitFramework = function () {
            //TODO: saving etc
            this.vs.showSummary();
        };
        AppCtrl.prototype.showLogin = function () {
            this.vs.showLogin();
        };
        AppCtrl.prototype.showForgottenDetails = function () {
            this.vs.showForgottenDetails();
        };
        AppCtrl.prototype.hideLoginBox = function () {
            this.vs.resetView();
        };
        AppCtrl.prototype.showRegister = function () {
            this.vs.showRegister();
        };
        AppCtrl.prototype.viewAccount = function () {
            this.vs.showAccount(aif.AccountDisplayRoute.FromViewAccount);
        };
        AppCtrl.prototype.saveProgress = function () {
            var loggedIn = this.isLoggedIn();
            var hasExisting = loggedIn ? this.currentUser.hasExistingFrameworks() : false;
            this.vs.attemptSave(loggedIn, hasExisting);
        };
        AppCtrl.prototype.downloadAifPdf = function () {
            if (getEntireDom && downloadPDF) {
                var opts = {
                    document_type: 'pdf',
                    document_content: getEntireDom(),
                    name: 'Framework',
                    javascript: false,
                    test: false
                };
                downloadPDF(opts, 'UmPbAOzv3fSfgTsHLZV');
            }
        };
        AppCtrl.prototype.registerNewUser = function (form) {
            if (!form.$valid)
                return;
            this.hideLoginBox();
        };
        AppCtrl.prototype.loadOrCreateFramework = function (form) {
            if (!form.$valid)
                return;
            if (this.savedFrameworkModel.existingFrameworkId > -1) {
                var self_1 = this;
                var matches = this.app.user.frameworks.filter(function (f) { return f.id === self_1.savedFrameworkModel.existingFrameworkId; });
                if (matches.length)
                    this.currentFramework = matches[0];
            }
            else if (this.savedFrameworkModel.newFrameworkName !== null) {
                if (this.app.user.frameworks === null)
                    this.app.user.frameworks = [];
                var newId = this.app.user.frameworks.length + 1;
                var newFramework = new aif.AifFramework(newId, this.savedFrameworkModel.newFrameworkName, this.savedFrameworkModel.newFrameworkDescription);
                this.app.user.frameworks.push(newFramework);
                this.currentFramework = newFramework;
            }
            this.hideLoginBox();
        };
        return AppCtrl;
    }());
    AppCtrl.$inject = ["$scope", "$timeout", "$sce", "userRepository", "viewService"];
    aif.AppCtrl = AppCtrl;
    var SavedFrameworkModel = (function () {
        function SavedFrameworkModel() {
            this.existingFrameworkId = -1;
            this.createNew = false;
            this.newFrameworkName = null;
            this.newFrameworkDescription = null;
        }
        return SavedFrameworkModel;
    }());
    aif.SavedFrameworkModel = SavedFrameworkModel;
    var LoginDisplayLogic = (function () {
        function LoginDisplayLogic($sce) {
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
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.MESSAGES.DEFAULT_LOGIN_Q;
            this.loginMessageA = this.MESSAGES.DEFAULT_LOGIN_A;
            this.createMessage = this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK;
            this.reset();
        }
        LoginDisplayLogic.prototype.showLogin = function () {
            this.reset();
            this.fadeBg = true;
            this.displayLogin = true;
        };
        LoginDisplayLogic.prototype.showSelectFramework = function (hasExisting) {
            this.reset();
            this.fadeBg = true;
            this.displayLogin = true;
            this.displaySelectFramework = true;
            this.hasExistingFrameworks = hasExisting;
            if (hasExisting)
                this.createMessage = this.MESSAGES.OR_CREATE_NEW_FRAMEWORK;
        };
        LoginDisplayLogic.prototype.showForgottenDetails = function () {
            this.reset();
            this.fadeBg = true;
            this.displayFtnDetails = true;
        };
        LoginDisplayLogic.prototype.hideLoginDisplay = function () {
            this.reset();
        };
        LoginDisplayLogic.prototype.showRegister = function () {
            this.reset();
            this.fadeBg = true;
            this.displayRegister = true;
        };
        LoginDisplayLogic.prototype.attemptSave = function (loggedIn) {
            this.reset();
            this.fadeBg = true;
            if (!loggedIn) {
                this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.SAVE_ATTEMPT_LOGIN_Q);
                this.loginMessageA = this.MESSAGES.SAVE_ATTEMPT_LOGIN_A;
                this.displayLogin = true;
                return;
            }
            this.displaySave = true;
        };
        LoginDisplayLogic.prototype.reset = function () {
            this.fadeBg = false;
            this.displayLogin = false;
            this.displaySelectFramework = false;
            this.hasExistingFrameworks = false;
            this.displayFtnDetails = false;
            this.displayRegister = false;
            this.displaySave = false;
            this.loginMessageQ = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_Q);
            this.loginMessageA = this.$sce.trustAsHtml(this.MESSAGES.DEFAULT_LOGIN_A);
            this.createMessage = this.$sce.trustAsHtml(this.MESSAGES.JUST_CREATE_NEW_FRAMEWORK);
        };
        return LoginDisplayLogic;
    }());
    aif.LoginDisplayLogic = LoginDisplayLogic;
})(aif || (aif = {}));

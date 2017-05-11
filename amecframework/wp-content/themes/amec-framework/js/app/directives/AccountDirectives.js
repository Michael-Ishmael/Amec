var aif;
(function (aif) {
    'use strict';
    var TEMPLATE_PATH = aif_constants.templateDir;
    var AifLoginScreen = (function () {
        function AifLoginScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/login.html';
            this.restrict = 'E';
            this.controllerAs = 'lc';
            this.bindToContoller = true;
        }
        AifLoginScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifLoginScreen.factory = function () {
            var directive = function () { return new AifLoginScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifLoginScreen;
    }());
    AifLoginScreen.$inject = [''];
    aif.AifLoginScreen = AifLoginScreen;
    var AifUserScreens = (function () {
        function AifUserScreens() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/userScreens.html';
            //template: string = "<h1>User Screens</h1>";
            this.restrict = 'E';
            this.controller = aif.UserScreensCtrl;
            this.controllerAs = 'us';
            this.bindToContoller = true;
        }
        //replace=true;
        AifUserScreens.prototype.link = function (scope, element, attributes) {
            console.log('here');
        };
        AifUserScreens.factory = function () {
            var directive = function () { return new AifUserScreens(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifUserScreens;
    }());
    AifUserScreens.$inject = [''];
    aif.AifUserScreens = AifUserScreens;
    var AifAccountScreen = (function () {
        function AifAccountScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/account.html';
            this.restrict = 'E';
            this.controllerAs = 'av';
            this.bindToContoller = true;
        }
        AifAccountScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifAccountScreen.factory = function () {
            var directive = function () { return new AifAccountScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifAccountScreen;
    }());
    AifAccountScreen.$inject = [''];
    aif.AifAccountScreen = AifAccountScreen;
    var AifCreateFwScreen = (function () {
        function AifCreateFwScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/create.html';
            this.restrict = 'E';
            this.controllerAs = 'cf';
            this.bindToContoller = true;
        }
        AifCreateFwScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifCreateFwScreen.factory = function () {
            var directive = function () { return new AifCreateFwScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifCreateFwScreen;
    }());
    AifCreateFwScreen.$inject = [''];
    aif.AifCreateFwScreen = AifCreateFwScreen;
    var AifSaveAsScreen = (function () {
        function AifSaveAsScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/saveAs.html';
            this.restrict = 'E';
            this.controllerAs = 'cf';
            this.bindToContoller = true;
        }
        AifSaveAsScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifSaveAsScreen.factory = function () {
            var directive = function () { return new AifSaveAsScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifSaveAsScreen;
    }());
    AifSaveAsScreen.$inject = [''];
    aif.AifSaveAsScreen = AifSaveAsScreen;
    var AifRegisterScreen = (function () {
        function AifRegisterScreen() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/register.html';
            this.restrict = 'E';
            this.controllerAs = 'rc';
            this.bindToContoller = true;
        }
        AifRegisterScreen.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifRegisterScreen.factory = function () {
            var directive = function () { return new AifRegisterScreen(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifRegisterScreen;
    }());
    AifRegisterScreen.$inject = [''];
    aif.AifRegisterScreen = AifRegisterScreen;
    var AifResetPassword = (function () {
        function AifResetPassword() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/resetPassword.html';
            this.restrict = 'E';
            this.controllerAs = 'rc';
            this.bindToContoller = true;
        }
        AifResetPassword.prototype.link = function (scope, element, attributes, ctrl) {
        };
        AifResetPassword.factory = function () {
            var directive = function () { return new AifResetPassword(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifResetPassword;
    }());
    AifResetPassword.$inject = [''];
    aif.AifResetPassword = AifResetPassword;
    var AifFrameworkSummary = (function () {
        function AifFrameworkSummary() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/frameworkSummary.html';
            this.restrict = 'E';
        }
        AifFrameworkSummary.factory = function () {
            var directive = function () { return new AifFrameworkSummary(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifFrameworkSummary;
    }());
    AifFrameworkSummary.$inject = [''];
    aif.AifFrameworkSummary = AifFrameworkSummary;
    var AifControlRow = (function () {
        function AifControlRow() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/controlRow.html';
            this.restrict = 'E';
        }
        AifControlRow.factory = function () {
            var directive = function () { return new AifControlRow(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifControlRow;
    }());
    AifControlRow.$inject = [''];
    aif.AifControlRow = AifControlRow;
    var AifListInputTile = (function () {
        function AifListInputTile() {
            this.templateUrl = TEMPLATE_PATH + '/js/app/views/listInputTile.html';
            this.restrict = 'E';
            this.scope = {
                cell: '=',
                step: '='
            };
            this.controller = aif.ListInputTileCtrl;
            this.controllerAs = 'li';
        }
        //replace=true;
        AifListInputTile.prototype.link = function (scope, element, attributes) {
        };
        AifListInputTile.factory = function () {
            var directive = function () { return new AifListInputTile(); };
            //directive.$inject = ['$location'];
            return directive;
        };
        return AifListInputTile;
    }());
    AifListInputTile.$inject = [''];
    aif.AifListInputTile = AifListInputTile;
})(aif || (aif = {}));

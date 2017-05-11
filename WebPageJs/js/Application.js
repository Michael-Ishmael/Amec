/// <reference path='_all.ts' />
/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
var aif;
(function (aif_1) {
    'use strict';
    var aif = angular.module('aif', ['ngCookies', 'tw.directives.clickOutside'])
        .service('userRepository', aif_1.UserRepository)
        .service('frameworkRepository', aif_1.FrameworkRepository)
        .service('aifService', aif_1.AifService)
        .service('viewService', aif_1.ViewService)
        .controller('appCtrl', aif_1.AppCtrl)
        .controller('accountViewCtrl', aif_1.AccountViewCtrl)
        .controller('frameworkCtrl', aif_1.FrameworkCtrl)
        .controller('createFrameworkCtrl', aif_1.CreateFrameworkCtrl)
        .controller('loginCtrl', aif_1.LoginCtrl)
        .controller('saveAsCtrl', aif_1.SaveAsCtrl)
        .controller('registerCtrl', aif_1.RegisterCtrl)
        .controller('resetPasswordCtrl', aif_1.ResetPasswordCtrl)
        .controller('frameworkSummaryCtrl', aif_1.FrameworkSummaryCtrl)
        .controller('listInputTileCtrl', aif_1.ListInputTileCtrl)
        .directive('aifLoginScreen', aif_1.AifLoginScreen.factory())
        .directive('aifAccountScreen', aif_1.AifAccountScreen.factory())
        .directive('aifCreateFwScreen', aif_1.AifCreateFwScreen.factory())
        .directive('aifSaveAsScreen', aif_1.AifSaveAsScreen.factory())
        .directive('aifRegisterScreen', aif_1.AifRegisterScreen.factory())
        .directive('aifResetPassword', aif_1.AifResetPassword.factory())
        .directive('aifFrameworkSummary', aif_1.AifFrameworkSummary.factory())
        .directive('aifListInputTile', aif_1.AifListInputTile.factory());
    //.directive('todoBlur', todoBlur)
    //.directive('todoFocus', todoFocus)
    //.directive('todoEscape', todoEscape)
})(aif || (aif = {}));

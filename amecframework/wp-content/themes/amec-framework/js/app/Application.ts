/// <reference path="_all.ts" />

/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
module aif {
  'use strict';

  let aif = angular.module('aif', ['ngCookies'])
    .service('userRepository', UserRepository)
    .service('frameworkRepository', FrameworkRepository)
    .service('aifService', AifService)
    .service('viewService', ViewService)
    .controller('appCtrl', AppCtrl)
    .controller('accountViewCtrl', AccountViewCtrl)
    .controller('frameworkCtrl', FrameworkCtrl)
    .controller('createFrameworkCtrl', CreateFrameworkCtrl)
    .controller('loginCtrl', LoginCtrl)
    .controller('saveAsCtrl', SaveAsCtrl)
    .controller('registerCtrl', RegisterCtrl)
    .controller('resetPasswordCtrl', ResetPasswordCtrl)
    .controller('frameworkSummaryCtrl', FrameworkSummaryCtrl)
    .controller('userScreensCtrl', UserScreensCtrl)
    .controller('listInputTileCtrl', ListInputTileCtrl)
    .controller('inputGridCtrl', InputGridCtrl)
    .directive('aifLoginScreen', AifLoginScreen.factory())
    .directive('aifAccountScreen', AifAccountScreen.factory())
    .directive('aifCreateFwScreen', AifCreateFwScreen.factory())
    .directive('aifSaveAsScreen', AifSaveAsScreen.factory())
    .directive('aifRegisterScreen', AifRegisterScreen.factory())
    .directive('aifResetPassword', AifResetPassword.factory())
    .directive('aifFrameworkSummary', AifFrameworkSummary.factory())
    .directive('aifListInputTile', AifListInputTile.factory())
    .directive('aifUserScreens', AifUserScreens.factory())
    .directive('aifInputGrid', AifInputGrid.factory())
      .config(['$httpProvider', (_$httpProvider:ng.IHttpProvider) => {
          _$httpProvider.interceptors.push(AifHttpInterceptor.factory())
      } ])
  ;

    //.directive('todoBlur', todoBlur)
    //.directive('todoFocus', todoFocus)
    //.directive('todoEscape', todoEscape)
}


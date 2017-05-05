/// <reference path='_all.ts' />

/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
module aif {
  'use strict';

  let aif = angular.module('aif', ['tw.directives.clickOutside'])
    .service('userRepository', UserRepository)
    .service('frameworkRepository', FrameworkRepository)
    .service('aifService', AifService)
    .controller('accountCtrl', AccountCtrl)
    .controller('frameworkCtrl', FrameworkCtrl);
    //.directive('todoBlur', todoBlur)
    //.directive('todoFocus', todoFocus)
    //.directive('todoEscape', todoEscape)
}
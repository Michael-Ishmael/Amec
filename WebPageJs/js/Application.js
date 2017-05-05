/// <reference path='_all.ts' />
/**
 * The main Aif app module.
 *
 * @type {angular.Module}
 */
var aif;
(function (aif_1) {
    'use strict';
    var aif = angular.module('aif', ['tw.directives.clickOutside'])
        .service('frameworkRepository', aif_1.FrameworkRepository)
        .controller('frameworkCtrl', aif_1.FrameworkCtrl);
    //.directive('todoBlur', todoBlur)
    //.directive('todoFocus', todoFocus)
    //.directive('todoEscape', todoEscape)
})(aif || (aif = {}));

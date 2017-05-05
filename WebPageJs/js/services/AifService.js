/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AifService = (function () {
        function AifService(userRepository) {
            this.userRepository = userRepository;
        }
        AifService.prototype.buildApp = function () {
            throw new Error('Method not implemented.');
        };
        return AifService;
    }());
    aif.AifService = AifService;
})(aif || (aif = {}));

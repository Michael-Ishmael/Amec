/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var PasswordMatchDir = (function () {
        function PasswordMatchDir() {
            this.restrict = 'A';
            this.require = 'ngModel';
            this.link = function (scope, element, attrs, ctrl) {
                var firstPassword = '#' + attrs['pwCheck'];
                element.add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        var v = element.val() === $(firstPassword).val();
                        ctrl.$setValidity('pwmatch', v);
                    });
                });
            };
        }
        PasswordMatchDir.factory = function () {
            var directive = function () { return new PasswordMatchDir(); };
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        };
        return PasswordMatchDir;
    }());
    aif.PasswordMatchDir = PasswordMatchDir;
})(aif || (aif = {}));

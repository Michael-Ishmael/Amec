/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AccountCtrl = (function () {
        function AccountCtrl($window, frameworkRepository) {
            this.$window = $window;
            this.frameworkRepository = frameworkRepository;
            this.editMode = false;
            this.editStep = null;
            this.infoCell = null;
        }
        return AccountCtrl;
    }());
    AccountCtrl.$inject = ["$window",
        "frameworkRepository"
    ];
    aif.AccountCtrl = AccountCtrl;
})(aif || (aif = {}));

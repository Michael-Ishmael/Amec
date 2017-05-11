var aif;
(function (aif) {
    'use strict';
    var UserScreensCtrl = (function () {
        function UserScreensCtrl($scope, vs, userRepository) {
            this.$scope = $scope;
            this.vs = vs;
            this.userRepository = userRepository;
            this.init();
        }
        UserScreensCtrl.prototype.init = function () {
            console.log("dfe");
        };
        return UserScreensCtrl;
    }());
    UserScreensCtrl.$inject = ["$scope", "viewService", "userRepository"];
    aif.UserScreensCtrl = UserScreensCtrl;
})(aif || (aif = {}));

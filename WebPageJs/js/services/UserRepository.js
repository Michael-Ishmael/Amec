/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var UserRepository = (function () {
        function UserRepository($timeout) {
            this.$timeout = $timeout;
            this.startLoggedIn = true;
        }
        UserRepository.prototype.get = function () {
            var self = this;
            return this.$timeout(function () {
                if (self.startLoggedIn) {
                    return aif.AifUser.createFromData(users[0]);
                }
                else {
                    return null;
                }
            }, 200);
        };
        UserRepository.prototype.logout = function () {
            return this.$timeout(function () {
                return true;
            });
        };
        UserRepository.prototype.login = function (userName, password) {
            return this.$timeout(function () {
                var matches = users.filter(function (u) { return u.userName == userName; });
                if (matches.length) {
                    return new aif.LoginResult(true, aif.AifUser.createFromData(matches[0]), null);
                }
                else {
                    return new aif.LoginResult(false, null, "Login failed");
                }
            }, 200);
        };
        return UserRepository;
    }());
    UserRepository.$inject = ["$timeout"];
    aif.UserRepository = UserRepository;
    var users = [
        {
            userName: "michaeli",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "66 Bytes",
            jobTitle: "Directors",
            country: "en"
        }
    ];
})(aif || (aif = {}));

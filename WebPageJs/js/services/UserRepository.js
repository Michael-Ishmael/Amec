/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var UserRepository = (function () {
        function UserRepository($timeout) {
            this.$timeout = $timeout;
            this.startLoggedIn = false;
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
        UserRepository.prototype.login = function (email, password) {
            return this.$timeout(function () {
                var matches = users.filter(function (u) { return u.email == email; });
                if (matches.length) {
                    var user = aif.AifUser.createFromData(matches[0]);
                    if (user.email === "mail@michaelishmael.com") {
                        user.frameworks = userFrameworks;
                    }
                    return new aif.LoginResult(true, user, null);
                }
                else {
                    return new aif.LoginResult(false, null, "Login failed");
                }
            }, 200);
        };
        return UserRepository;
    }());
    //wp_lostpassword_url()
    UserRepository.$inject = ["$timeout"];
    aif.UserRepository = UserRepository;
    var users = [
        {
            email: "michaelishmael1976@gmail.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "Michael Ishmael Ltd",
            jobTitle: "Director",
            language: "en"
        },
        {
            email: "mail@michaelishmael.com",
            firstName: "Michael",
            lastName: "Ishmael",
            organisation: "66 Bytes",
            jobTitle: "Director",
            language: "en"
        }
    ];
    var userFrameworks = [
        {
            id: 1,
            name: "Coca-cola summer campaign",
            description: "New music promotion"
        },
        {
            id: 2,
            name: "Sprite summer campaign",
            description: "New basketball promotion"
        }
    ];
})(aif || (aif = {}));

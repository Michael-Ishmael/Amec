/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var UserRepository = (function () {
        function UserRepository($timeout, $rootScope, $cookies) {
            this.$timeout = $timeout;
            this.$rootScope = $rootScope;
            this.$cookies = $cookies;
            //For debug
            this.startLoggedIn = false;
        }
        UserRepository.prototype.get = function () {
            var _this = this;
            return this.$timeout(function () {
                var cUser = _this.$cookies.getObject("aifUser");
                if (cUser && cUser.email) {
                    var matches = users.filter(function (u) { return u.email == cUser.email; });
                    if (matches.length) {
                        var user = aif.AifUser.createFromData(matches[0]);
                        if (user.email === "mail@michaelishmael.com") {
                            user.frameworks = userFrameworks;
                            if (cUser.currentFrameworkId) {
                                user.setExistingFramework(cUser.currentFrameworkId);
                            }
                        }
                        _this.currentUser = user;
                        return user;
                    }
                    else {
                        return null;
                    }
                }
            }, 200);
        };
        UserRepository.prototype.save = function () {
            var _this = this;
            return this.$timeout(function () {
                if (!_this.currentUser) {
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                }
                if (!_this.currentUser.currentFramework) {
                    //Save here
                }
                return new aif.SaveFrameworkResult(true, _this.currentUser.currentFramework, null);
            }, 200);
        };
        UserRepository.prototype.logout = function () {
            var _this = this;
            return this.$timeout(function () {
                _this.currentUser = null;
                _this.$cookies.remove("aifUser");
                _this.$rootScope.$broadcast("user:loggedOut");
                return true;
            });
        };
        UserRepository.prototype.login = function (email, password) {
            var _this = this;
            return this.$timeout(function () {
                var matches = users.filter(function (u) { return u.email == email; });
                if (matches.length) {
                    var user = aif.AifUser.createFromData(matches[0]);
                    if (user.email === "mail@michaelishmael.com") {
                        user.frameworks = userFrameworks;
                    }
                    _this.currentUser = user;
                    _this.$rootScope.$broadcast("user:loggedIn", user);
                    _this.storeUser();
                    return new aif.LoginResult(true, user, null);
                }
                else {
                    return new aif.LoginResult(false, null, "Login failed");
                }
            }, 200);
        };
        UserRepository.prototype.storeUser = function () {
            var userObj = {
                email: this.currentUser.email,
                currentFrameworkId: null
            };
            if (this.currentUser.currentFramework)
                userObj.currentFrameworkId = this.currentUser.currentFramework.id;
            this.$cookies.putObject("aifUser", userObj);
        };
        UserRepository.prototype.createNewFramework = function (name, description) {
            var _this = this;
            var hasUser = !!this.currentUser;
            return this.$timeout(function () {
                if (!hasUser)
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                var newId = _this.currentUser.frameworks == null ? 1 : _this.currentUser.frameworks.length + 1;
                var framework = new aif.AifFramework(newId, name, description);
                _this.currentUser.frameworks.forEach(function (f) { return f.current = false; });
                framework.current = true;
                _this.currentUser.addNewFramework(framework);
                _this.storeUser();
                _this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                return new aif.SaveFrameworkResult(true, framework, "Framework created");
            }, 200);
        };
        UserRepository.prototype.setExistingFramework = function (id) {
            var _this = this;
            var hasUser = !!this.currentUser;
            return this.$timeout(function () {
                if (!hasUser)
                    return new aif.SaveFrameworkResult(false, null, "User not logged in");
                if (_this.currentUser.frameworks == null)
                    return new aif.SaveFrameworkResult(false, null, "User has no frameworks");
                var matches = _this.currentUser.frameworks.filter(function (f) { return f.id === id; });
                if (matches.length) {
                    var framework = matches[0];
                    _this.currentUser.frameworks.forEach(function (f) { return f.current = false; });
                    framework.current = true;
                    //TODO: Save framework here
                    _this.currentUser.currentFramework = framework;
                    _this.$rootScope.$broadcast("framework:frameworkUpdated", framework);
                    _this.storeUser();
                    return new aif.SaveFrameworkResult(true, framework, "Framework selected");
                }
                else {
                    _this.currentUser.currentFramework = null;
                    _this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    return new aif.SaveFrameworkResult(false, null, "No matching frameworks found");
                }
            }, 200);
        };
        UserRepository.prototype.deleteFramework = function (id) {
            var _this = this;
            var hasUser = !!this.currentUser;
            return this.$timeout(function () {
                if (!hasUser)
                    return false;
                if (_this.currentUser.frameworks == null)
                    return false;
                var foundIndex = -1;
                var foundFramework = null;
                _this.currentUser.frameworks.forEach(function (f, i) {
                    if (f.id == id) {
                        foundIndex = i;
                        foundFramework = f;
                    }
                });
                if (foundIndex > -1) {
                    if (_this.currentUser.currentFramework == foundFramework) {
                        _this.currentUser.currentFramework = null;
                        _this.$rootScope.$broadcast("framework:frameworkUpdated", null);
                    }
                    _this.currentUser.frameworks.splice(foundIndex, 1);
                }
            }, 200);
        };
        return UserRepository;
    }());
    //wp_lostpassword_url()
    UserRepository.$inject = ["$timeout", "$rootScope", '$cookies'];
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
            name: "Coca-cola spring campaign",
            description: "New music promotion",
            selected: false,
            flaggedDelete: false,
            current: false
        },
        {
            id: 2,
            name: "Sprite summer campaign",
            description: "New basketball promotion",
            selected: false,
            flaggedDelete: false,
            current: false
        },
        // {
        //   id: 3,
        //   name: "Fanta summer campaign",
        //   description: "Renewed comedy promotion",
        //   selected: false,
        //   flaggedDelete: false,
        //   current: false
        // },
        {
            id: 4,
            name: "Diet Coke summer campaign",
            description: "Continued lifestyle promotion",
            selected: false,
            flaggedDelete: false,
            current: false
        },
        {
            id: 5,
            name: "Coke Zero winter",
            description: "Xtreme sports tie-ins",
            selected: false,
            flaggedDelete: false,
            current: false
        }
    ];
})(aif || (aif = {}));

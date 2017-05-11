var aif;
(function (aif) {
    'use strict';
    var AifHttpInterceptor = (function () {
        function AifHttpInterceptor() {
        }
        //public static $inject = ["$injector"];
        AifHttpInterceptor.prototype.request = function (config) {
            if (config.url.indexOf('admin-ajax') > -1) {
                config.headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
                    config.transformRequest = function (obj) {
                        var str = [];
                        for (var p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    };
            }
            return config;
        };
        AifHttpInterceptor.factory = function () {
            return function () { return new AifHttpInterceptor(); };
        };
        return AifHttpInterceptor;
    }());
    aif.AifHttpInterceptor = AifHttpInterceptor;
})(aif || (aif = {}));

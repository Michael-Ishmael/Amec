declare var ajax_auth_object:any;

module aif {
    'use strict';

    export class AifHttpInterceptor {

        //public static $inject = ["$injector"];

        public request(config: ng.IRequestConfig) {
            if(config.url.indexOf('admin-ajax') > -1){
                config.headers = {'Content-Type': 'application/x-www-form-urlencoded'},
                    config.transformRequest = function (obj) {
                        let str = [];
                        for (let p in obj)
                            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                        return str.join("&");
                    };
            } else {
                if(config.url.indexOf('wp-json') > -1){
                    config.headers = {'Content-Type': 'application/json',
                     'X-WP-Nonce': ajax_auth_object.rest_nonce }
                }
            }

            return config;
        }

        constructor() {
        }


        static factory(): ng.IDirectiveFactory {

            return () => new AifHttpInterceptor();
        }

    }

}


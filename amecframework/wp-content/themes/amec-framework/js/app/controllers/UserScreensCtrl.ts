

module aif {
    'use strict';

    export class UserScreensCtrl {

        public static $inject = ["$scope", "viewService", "userRepository"];
        constructor(private $scope: ng.IScope, public vs:ViewService, private  userRepository:UserRepository) {
            this.init();
        }

        private init(): void {
            console.log("dfe")
        }


    }

}


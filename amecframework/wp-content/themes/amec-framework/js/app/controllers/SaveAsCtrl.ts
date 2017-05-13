module aif {
    'use strict';

    export class SaveAsCtrl {

        public static $inject = ["$scope", "userRepository", "viewService"];

        public title: string = "Your account";
        public user: AifUser = null;
        public currentFramework: AifFramework = null;

        public altMessage: string = "S";
        public exInc: number = 0;


        public saveUnsuccessful: boolean = false;
        public saveFailMessage: string = null;

        private colors: Array<string> = ["red", "yellow", "green", "light_blue", "dark_blue", "purple"];


        constructor(private $scope: ng.IScope, private  userRepository: UserRepository, public vs: ViewService) {
            this.init();
        }

        public getColorClass(prefix: string, index: number = 0): string {
            if (index > this.colors.length - 1) index = index % this.colors.length;
            return prefix + "-" + this.colors[index] + " ";
        }


        private init(): void {
            if (!this.userRepository.currentUser) {
                this.vs.showLogin(true);
                return;
            }

            this.user = this.userRepository.currentUser;
            if (this.user.currentFramework) {
                this.currentFramework = this.user.currentFramework;
                this.toggleSelectFramework(this.currentFramework);
                this.altMessage = "Alternatively, s";
                this.exInc = 1;
            }

            this.setTitle(this.vs.accountDisplayRoute)
        }

        private setTitle(displayRoute: AccountDisplayRoute): void {
            this.title = "Save framework";
            if (this.currentFramework) {


            } else {

            }
        }

        public saveAsSelectedFramework(): void {

            if (this.user && this.frameworkIsSelected()) {

                let selected = this.user.frameworks.filter(f => f.selected)[0];
                this.userRepository.setExistingFramework(selected.id).then(s => {
                    if (s) {
                        this.userRepository.save().then(s => {

                            console.log(s.success)

                        });
                        this.vs.resetView();
                    }
                });
            }


        }

        public toggleSelectFramework(framework: AifFramework) {
            if (framework.selected) {
                framework.selected = false;
            } else {
                this.user.frameworks.forEach(f => f.selected = false);
                framework.selected = true;
            }

        }

        public frameworkIsSelected(): boolean {
            return this.user.frameworks.some(f => {
                return f.selected
            });
        }


    }

}


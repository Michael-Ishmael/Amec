module aif {
    'use strict';

    export class SaveAsCtrl {

        public static $inject = ["$scope", "userRepository", "viewService"];

        public title: string = "Save framework";
        public user: AifUser = null;
        public currentFramework: AifFramework = null;

        public altMessage: string = "S";
        public exInc: number = 0;
        public waiting: boolean = false;

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
                this.selectFramework(this.currentFramework);
                this.user.frameworks.forEach(s => s.saving = false);
                if(this.user.frameworks.length > 1){
                    this.altMessage = "Alternatively, save as an existing framework or";
                } else {
                    this.altMessage = "or";
                }

                this.exInc = 1;
            } else if(this.user.frameworks.length) {
                this.altMessage = "Save as an existing framework or";
            }

            this.setTitle(this.vs.accountDisplayRoute)
        }

        public toggleSave(){
            this.waiting = !this.waiting;
        }

        private setTitle(displayRoute: AccountDisplayRoute): void {
            this.title = "Save framework";
            if (this.currentFramework) {


            } else {

            }
        }

        public closeView(){
            this.user.frameworks.forEach(f => f.selected = false);
            this.user.frameworks.forEach(f => f.flaggedDelete = false);
            this.vs.resetView();
        }

        public saveAsSelectedFramework(): void {

            if (this.user && this.frameworkIsSelected()) {
                this.waiting = true;
                let selected = this.user.frameworks.filter(f => f.selected)[0];
                this.userRepository.saveOverFramework(selected.id).then(s => {
                    if (s) {
                        this.userRepository.save().then(s => {

                            //console.log(s.success)

                        });
                        this.vs.resetView();
                    }
                });
            }


        }

        public saveFramework(frameWork:AifFramework){

            frameWork.saving = true;
            this.userRepository.saveOverFramework(frameWork.id).then(s => {
                if (s) {

                    frameWork.saving = false;
                    this.vs.resetView();
                }
            });
        }

        public showCreateFramework(){
            this.vs.showCreateFramework(AccountDisplayRoute.FromSave, this.user.frameworks.length > 0);
        }

        public selectFramework(framework: AifFramework) {
            framework.flaggedDelete = false;
            if (framework.selected) {
                return;
            } else {
                this.user.frameworks.forEach(f => f.selected = false);
                framework.selected = true;
            }

        }

        public toggleSaveOver(framework: AifFramework) {
            framework.flaggedDelete = !framework.flaggedDelete;

        }


        public frameworkIsSelected(): boolean {
            return this.user.frameworks.some(f => {
                return f.selected
            });
        }


    }

}


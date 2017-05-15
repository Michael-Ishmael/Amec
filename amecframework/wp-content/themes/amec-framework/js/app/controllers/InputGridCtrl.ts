module aif {
    'use strict';

    export interface IEmptyable {
        isEmpty(): boolean;
    }

    export class Empty implements IEmptyable {

        isEmpty(): boolean {
            return true;
        }

    }

    export class InputCell implements IEmptyable {

        constructor(public colSpan = 1, public cellType: AifInputCellType) {

        }

        isInput(): boolean {

            return this.cellType == AifInputCellType.Input;

        }

        isInfo(): boolean {

            return this.cellType == AifInputCellType.Info;

        }

        isEmpty(): boolean {
            return this.cellType == AifInputCellType.Empty;
        }

    }

    export class InputRow implements IEmptyable {

        cells: Array<InputCell> = [];

        isEmpty(): boolean {
            return this.cells.length == 0;
        }
    }

    export class InputGridCtrl {

        public static $inject = ["$scope", '$sce', "viewService"];

        public step: AifFrameworkStep;
        public rows: Array<InputRow> = [];

        public infoText = null;

        constructor(private $scope: ng.IScope, private $sce:ng.ISCEService, public vs: ViewService) {
            this.init();
        }

        public getColorClass(prefix: string): string {
            return prefix + "-" + this.step.baseColor + " ";
        }

        public showInfo(input: AifStepInput) {
            this.infoText = this.$sce.trustAsHtml(input.info);
        }

        public sanitize(text:string):any {
            if(!text) return null;
            return this.$sce.trustAsHtml(text);
        }

        public close() {
            this.vs.resetView();
        }

        public init(): void {
            this.infoText = null;
            if (this.step) {

                for (let i = 1; i <= this.step.row; i++) {

                    let row = new InputRow();
                    if (i == this.step.row) {
                        this.step.cellOrder.forEach(o => {

                            if (o === AifInputCellType.Input) {
                                row.cells.push(new InputCell(this.step.colSpan, o))
                            } else {
                                row.cells.push(new InputCell(1, o))
                            }

                        })
                    }
                    this.rows.push(row);
                }
            }
        }


    }

}


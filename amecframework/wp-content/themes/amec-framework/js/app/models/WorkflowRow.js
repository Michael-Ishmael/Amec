/// <reference path="../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var WorkflowRow = (function () {
        function WorkflowRow(cells) {
            this.cells = cells;
        }
        return WorkflowRow;
    }());
    aif.WorkflowRow = WorkflowRow;
})(aif || (aif = {}));

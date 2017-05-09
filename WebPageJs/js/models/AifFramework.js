/// <///<reference path=".../_all.ts" />
var aif;
(function (aif) {
    'use strict';
    var AifFramework = (function () {
        function AifFramework(id, name, description) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.selected = false;
            this.flaggedDelete = false;
            this.current = false;
        }
        return AifFramework;
    }());
    aif.AifFramework = AifFramework;
    var AifSummary = (function () {
        function AifSummary() {
            this.rows = [];
        }
        return AifSummary;
    }());
    aif.AifSummary = AifSummary;
    var AifSummaryRow = (function () {
        function AifSummaryRow() {
            this.sections = [];
            this.maxRowHeight = -1;
        }
        return AifSummaryRow;
    }());
    aif.AifSummaryRow = AifSummaryRow;
    var AifSummarySection = (function () {
        function AifSummarySection(heading) {
            this.heading = heading;
            this.groups = [];
            this.width = 1;
        }
        return AifSummarySection;
    }());
    aif.AifSummarySection = AifSummarySection;
    var AifSummaryGroup = (function () {
        function AifSummaryGroup(heading, headingColor, bodyColor) {
            this.heading = heading;
            this.headingColor = headingColor;
            this.bodyColor = bodyColor;
            this.steps = [];
        }
        return AifSummaryGroup;
    }());
    aif.AifSummaryGroup = AifSummaryGroup;
    var AifFrameworkStep = (function () {
        function AifFrameworkStep(heading) {
            this.heading = heading;
            this.entries = [];
            this.inputStyle = aif.InputStyle.WholeStep;
        }
        AifFrameworkStep.prototype.html = function () {
            throw new Error('Method not implemented.');
        };
        return AifFrameworkStep;
    }());
    aif.AifFrameworkStep = AifFrameworkStep;
    var AifFreeTextFrameworkEntry = (function () {
        function AifFreeTextFrameworkEntry(heading) {
            this.heading = heading;
            this.inputStyle = aif.InputStyle.TextArea;
        }
        AifFreeTextFrameworkEntry.prototype.html = function () {
            return this.text;
        };
        return AifFreeTextFrameworkEntry;
    }());
    aif.AifFreeTextFrameworkEntry = AifFreeTextFrameworkEntry;
    var SaveFrameworkResult = (function () {
        function SaveFrameworkResult(success, frameWork, message) {
            this.success = success;
            this.frameWork = frameWork;
            this.message = message;
        }
        return SaveFrameworkResult;
    }());
    aif.SaveFrameworkResult = SaveFrameworkResult;
})(aif || (aif = {}));

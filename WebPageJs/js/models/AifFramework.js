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
        function AifSummaryGroup(heading, color) {
            this.heading = heading;
            this.color = color;
            this.steps = [];
        }
        return AifSummaryGroup;
    }());
    aif.AifSummaryGroup = AifSummaryGroup;
    var SummaryStyle;
    (function (SummaryStyle) {
        SummaryStyle[SummaryStyle["Entry"] = 0] = "Entry";
        SummaryStyle[SummaryStyle["WholeStep"] = 1] = "WholeStep";
    })(SummaryStyle = aif.SummaryStyle || (aif.SummaryStyle = {}));
    var AifFrameworkStep = (function () {
        function AifFrameworkStep(heading) {
            this.heading = heading;
            this.entries = [];
            this.summaryStyle = SummaryStyle.WholeStep;
        }
        AifFrameworkStep.prototype.html = function () {
            var ht = "";
            if (this.entries)
                this.entries.forEach(function (e) {
                    var eht = e.html();
                    if (eht) {
                        if (ht.length)
                            ht += "<br>";
                        ht += eht.trim();
                    }
                });
            return ht.trim();
        };
        return AifFrameworkStep;
    }());
    aif.AifFrameworkStep = AifFrameworkStep;
    var AifFreeTextFrameworkEntry = (function () {
        function AifFreeTextFrameworkEntry(heading) {
            this.heading = heading;
            this.summaryStyle = SummaryStyle.Entry;
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

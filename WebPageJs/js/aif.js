function WorkflowStep(step, layout) {

    var self = this;
    self.title = step.title;
    self.index = step.index;
    self.row = step.row;
    self.colspan = step.colspan;
    self.color = step.color;
    self.template = step.isSubmit ? 'submit' : 'standard';

    self.columnClass = ko.computed(function(){
        if(self.colspan === 2) return "col-md-8";
        return "col-md-4"
    }, this);

    self.columnClass = ko.computed(function(){
        if(self.colspan === 2) return "col-md-8";
        return "col-md-4"
    }, this);

    self.getColorClass = function(prefixes){
        if(!$.isArray(prefixes)) return prefixes + "-" + self.color + " ";
        var classes = '';
        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            classes += prefix + "-" + self.color + " ";
        }
        return classes.trim();
    }

    self.handleClick = function(){
        if(layout && layout.stepClicked && typeof layout.stepClicked === "function"){
            layout.stepClicked(self);
        }
    }

}

function WorkflowLayout(steps) {
    var self = this;

    self.showEdit = null; // ko.observable(true);
    self.stepClicked = function(step){
        self.showEdit(true);
        // Handle step
    };

    self.steps = steps.forEach(function (s) {
        return new WorkflowStep(s, self)
    });

    function getRowArray(steps){
        var rowObj = steps.reduce(function(grps, s){
            (grps[s["row"]] = grps[s["row"]] || []).push(s);
            return grps;
        }, {});

        var rowCount = Math.max.apply(Math, steps.map(function(s){return s.row;}));
        var rows = [];

        for (var i = 0; i < rowCount; i++) {
            var row = rowObj[i + 1];
            rows.push(row.map(function (s) {
                return new WorkflowStep(s);
            }));
        }
        return rows;
    }

    var rows = getRowArray(steps);
    self.rows = ko.observableArray(rows);
}

ko.applyBindings(new WorkflowLayout(steps));

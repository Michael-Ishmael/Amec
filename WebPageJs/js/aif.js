
function WorkflowStep(title, index){

  this.title = title;
  this.index = index;

}

function WorkflowLayout(steps){

  this.steps = steps.forEach(function(s){ return new WorkflowStep(step.title, step.index)});

}

var steps = [
  {
    title: 'Objectives',
    index: 1
  },
  {
    title: 'Inputs',
    index: 2
  },
  {
    title: 'Inputs',
    index: 3
  },
  {
    title: 'Inputs',
    index: 4
  },
  {
    title: 'Inputs',
    index: 5
  },
  {
    title: 'Inputs',
    index: 6
  },
  {
    title: 'Inputs',
    index: 7
  }
];
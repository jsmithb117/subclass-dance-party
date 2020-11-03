var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<span class="blinky-dancer"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.oldStep;
  this.timeBetweenSteps = timeBetweenSteps//still undefined
  // i am trying to understand timebetweensteps flow in dancer.js
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  console.log (this.timeBetweenSteps) //undefined
  this.oldStep(this.timeBetweenSteps);

  // MakeDancer.prototype.step.call(this, this.timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.oldStep = function(timeBetweenSteps) {
  // it needs to call the oldStep in order to add 1
  MakeDancer.prototype.step(timeBetweenSteps);
  //RangeError: Maximum call stack size exceeded
  // at Object.MakeDancer.step (file:///C:/Users/Jason/git/rpt26-subclass-dance-party/src/dancer.js:23:19)
};

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

//dance
// should call step at least once per second
//expected 0 to equal 1


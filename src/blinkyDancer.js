var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="blinkydancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};

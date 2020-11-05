//Rick will shrink and grow
var MakeRickDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="rickdancer" src="images/transparentRick.png">');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};

MakeRickDancer.prototype = Object.create(MakeDancer.prototype);
MakeRickDancer.prototype.constructor = MakeRickDancer;

MakeRickDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
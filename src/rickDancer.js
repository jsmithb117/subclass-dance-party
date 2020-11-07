//Rick will shrink and grow
var MakeRickDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="rickdancer" src="images/transparentRick.png">');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
  this.$node.mouseover(function() {
    this.src = 'images/angryrick.jpg';
  }).mouseleave(function() {
    this.src = 'images/transparentRick.png';
  });
};

MakeRickDancer.prototype = Object.create(MakeDancer.prototype);
MakeRickDancer.prototype.constructor = MakeRickDancer;

MakeRickDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
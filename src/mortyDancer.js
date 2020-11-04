//Morty will flip on the horizontal axis then flip back
var MakeMortyDancer = function(top, left, timeBetweenSteps) {
  this.node = $('<span class="mortydancer"></span>');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.node);
};

MakeMortyDancer.prototype = Object.create(MakeDancer.prototype);
MakeMortyDancer.prototype.constructor = MakeMortyDancer;

MakeMortyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
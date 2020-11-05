//Morty will flip on the horizontal axis then flip back
var MakeMortyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="mortydancer" src="images/morty.png">');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
};

MakeMortyDancer.prototype = Object.create(MakeDancer.prototype);
MakeMortyDancer.prototype.constructor = MakeMortyDancer;

MakeMortyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
//Morty will flip on the horizontal axis then flip back
var MakeMortyDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img class="mortydancer" src="images/morty.png">');
  MakeDancer.call(this, top, left, timeBetweenSteps, this.$node);
  this.$node.mouseover(function() {
    this.src = 'images/sadmorty.jpg';
  }).mouseleave(function() {
    this.src = 'images/morty.png';
  });
};

MakeMortyDancer.prototype = Object.create(MakeDancer.prototype);
MakeMortyDancer.prototype.constructor = MakeMortyDancer;

MakeMortyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};
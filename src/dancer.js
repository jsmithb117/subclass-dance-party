var MakeDancer = function(top, left, timeBetweenSteps, node) {
  this.$node = node || $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);
  this.setPosition(top, left);
};


MakeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };

 this.$node.css(styleSettings);
};
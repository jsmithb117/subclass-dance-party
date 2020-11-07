describe('rickDancer', function() {

  var RickDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    RickDancer = new MakeRickDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(RickDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should align dancers and then reset them', function() {
    window.lineUpFunction(RickDancer);
    expect(RickDancer.$node[0].style.top).to.equal('50%');
  });

});

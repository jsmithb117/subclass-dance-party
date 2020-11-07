describe('mortyDancer', function() {

  var MortyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    MortyDancer = new MakeMortyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(MortyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should align dancers and then reset them', function() {
    window.lineUpFunction(MortyDancer);
    expect(MortyDancer.$node[0].style.top).to.equal('50%');
  });

  // it('should have a random class when grouped', function() {

  // });
});
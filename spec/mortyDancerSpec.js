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

  // it('should have a step function that makes its node blink', function() {
  //   sinon.spy(RickDancer.$node, 'toggle');
  //   RickDancer.step();
  //   expect(RickDancer.$node.toggle.called).to.be.true;
  // });

  // describe('dance', function() {
  //   it('should call step at least once per second', function() {
  //     sinon.spy(RickDancer, 'step');
  //     expect(RickDancer.step.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(RickDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(RickDancer.step.callCount).to.be.equal(2);
  //   });
  // });
});
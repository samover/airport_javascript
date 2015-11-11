// As an air traffic controller
// So planes can land safely at my airport
// I would like to instruct a plane to land

describe('Plane', function() {
  var plane;

  beforeEach(function() {
    plane = new Plane; 
  });

  it ('plane can land', function() {
    plane.land();
    expect(plane.isLanded()).toBe(true);
  });
});

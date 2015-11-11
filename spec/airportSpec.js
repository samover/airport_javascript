// As an air traffic controller
// So that I can avoid collisions
// I want to prevent airplanes landing when my airport if full

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane'
  });

  describe('landing and takeoff', function(){
    // As an air traffic controller
    // So planes can land safely at my airport
    // I would like to instruct a plane to land
    it('can tell a plane to land', function(){
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });

    //   As an air traffic controller
    //  So planes can take off safely from my airport
    // I would like to instruct a plane to take off
    it('can tell a plane to takeoff', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });

    // As an air traffic controller
    // So that I can avoid collisions
    // I want to prevent airplanes landing when my airport if full
    it('can prevent landing when airport is full', function(){
      airport.capacity = 1;
      airport.land(plane);
      expect(airport.land(plane)).toThrowError('Airport is full');
    });

  });
});

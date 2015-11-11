// As an air traffic controller
// So that I can avoid collisions
// I want to prevent airplanes landing when my airport if full

describe('Airport', function(){
  var airport;

  beforeEach(function(){
    airport = new Airport(); 
  });

  describe('landing and takeoff', function(){

    it('can tell a plane to land', function(){
      airport.land(plane); 
      expect(airport.planes).toContain(plane);
    });

    it('can tell a plane to takeoff', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes).not.toContain(plane);
    });

  });
});

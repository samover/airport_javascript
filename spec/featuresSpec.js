// Given 10 planes, each plane must land.
// When weather conditions are stormy, pilot should try again later.
// All planes are landed when they have status :landed
// After all planes have landed, they should all take off again.
// All planes have taken off when they have status :flying

describe('daily functioning of an airport', function() {

  var airport;
  var planes;

  beforeEach(function() {
    planes = [];
    airport = new Airport(capacity: 15, weather: new Weather());
    for(i = 0; i < 10; i++) {
      planes.push(new Plane());
    }
  });

  it('lands 10 planes', function() {

    planes.forEach(function(plane) {
      while(plane.isLanded() === false) {
        try {
          airport.land(plane);
        }
        catch(err) {
          console.log(err.message);
        }
      }
    });

    expect(airport.planes().length).toEqual(10);
  });
});

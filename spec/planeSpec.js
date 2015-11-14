describe('Plane', function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = 'airport';
  });

  // As an air traffic controller
  // So planes can land safely at my airport
  // I would like to instruct a plane to land

  it ('plane can land', function() {
    plane.land(airport);
    expect(plane.isLanded()).toBe(true);
  });

  //   As an air traffic controller
  //  So planes can take off safely from my airport
  // I would like to instruct a plane to take off

  it('plane can take off', function(){
    plane._flyStatus = true;
    plane.takeOff();
    expect(plane.isLanded()).toBe(false);
  });

  // As an air traffic controller
  // So the system is consistent and correctly reports plane status and location
  // I want to ensure a flying plane cannot take off and cannot be in an airport
  it('a flying plane cannot takeoff', function() {
    expect(plane.takeOff()).toEqual('A flying plane cannot take off');
  });

  it('a flying plane cannot be in the airport', function() {
    expect(plane.locatedIn()).toEqual('air');
  });

  // As an air traffic controller
  // So the system is consistent and correctly reports plane status and location
  // I want to ensure a plane that is not flying cannot land and must be in an airport
  it('a landed plane cannot land', function() {
    plane.land(airport);
    expect(plane.land()).toEqual('A landed plane cannot land');
  });

  it('a landed plane must be in an airport', function() {
    plane.land(airport);
    expect(plane.locatedIn()).toEqual(airport);
  });

});

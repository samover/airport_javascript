describe('Plane', function() {
  var plane;
  var airport;
  var takeOff;
  var land;

  beforeEach(function() {
    plane = new Plane();
    airport = 'airport';
    land = function() { plane.land(airport); };
    takeOff = function() { plane.takeOff(); };
  });

  // As an air traffic controller
  // So planes can land safely at my airport
  // I would like to instruct a plane to land

  it ('plane can land', function() {
    plane.land(airport);
    expect(plane._isLanded()).toBe(true);
  });

  //   As an air traffic controller
  //  So planes can take off safely from my airport
  // I would like to instruct a plane to take off

  it('plane can take off', function(){
    plane.land(airport);
    plane.takeOff();
    expect(plane._isLanded()).toBe(false);
  });

  // As an air traffic controller
  // So the system is consistent and correctly reports plane status and location
  // I want to ensure a flying plane cannot take off and cannot be in an airport
  it('a flying plane cannot takeoff', function() {
    expect(takeOff).toThrowError('A flying plane cannot take off');
  });

  it('a flying plane cannot be in the airport', function() {
    expect(plane._locatedIn()).toEqual('air');
  });

  // As an air traffic controller
  // So the system is consistent and correctly reports plane status and location
  // I want to ensure a plane that is not flying cannot land and must be in an airport
  it('a landed plane cannot land', function() {
    plane.land(airport);
    expect(land).toThrowError('A landed plane cannot land');
  });

  it('a landed plane must be in an airport', function() {
    plane.land(airport);
    expect(plane._locatedIn()).toEqual(airport);
  });

});

describe('Airport', function(){
  var airport;
  var plane;
  var land;
  var takeOff;
  var def_capacity;

  beforeEach(function(){
    weather = { isStormy: function() {} };
    plane = { land: function() {}, takeOff: function() {} };

    spyOn(weather, 'isStormy').and.returnValue(false);

    airport = new Airport({weather: weather});
    airport._hangar = [];
    def_capacity = airport.DEF_CAPACITY;

    land = function() { airport.land(plane); };
    takeOff = function() { airport.takeOff(plane); };
  });

  describe('when creating a new airport', function() {

    // As a system designer
    // So that I have a airport template
    // I would like airports to have a default capacity
    it('has a default capacity', function() {
     expect(airport.capacity) .toEqual(def_capacity);
    });

    // As a system designer
    // So that the software can be used for different airports
    // I would like a default capacity that can be overridden
    it('has a settable capacity', function() {
      airport = new Airport({capacity: 20});
      expect(airport.capacity).toEqual(20);
    });
  });


  describe('landing', function(){
    // As an air traffic controller
    // So planes can land safely at my airport
    // I would like to instruct a plane to land
    it('can tell a plane to land', function(){
      airport.land(plane);
      expect(airport.planes()).toContain(plane);
    });

    // As an air traffic controller
    // So that I can avoid collisions
    // I want to prevent airplanes landing when my airport if full
    it('can prevent landing when airport is full', function(){
      airport.capacity = 1;
      airport.land(plane);
      expect(land).toThrowError('Airport is full');
    });

  });

  describe('takeoff', function() {

    // As an air traffic controller
    // So planes can take off safely from my airport
    // I would like to instruct a plane to take off
    it('can tell a plane to takeoff', function(){
      airport.land(plane);
      airport.takeOff(plane);
      expect(airport.planes()).not.toContain(plane);
    });

    //As an air traffic controller
    //So that I can ensure safe take off procedures
    //I want planes only to take off from the airport they are at
    it('cannot take off if not at airport', function(){
      expect(takeOff).toThrowError('Plane not at airport');
    });

    // As an air traffic controller
    // So the system is consistent and correctly reports plane status and location
    // I want to ensure a flying plane cannot take off

  });

  describe('stormy weather', function(){
    //As an air traffic controller
    //So that I can avoid accidents
    //I want to prevent airplanes landing or taking off when the weather is
    //stormy
    it('cannot land a plane', function(){
      weather.isStormy.and.returnValue(true);
      expect(land).toThrowError('Weather is stormy');
    });

    // As an air traffic controller
    // So taht I can avoid accidents
    // I want to prevent airplanes from landing when weather is stormy
    it('cannot takeoff', function(){
      airport.land(plane);
      weather.isStormy.and.returnValue(true);
      expect(takeOff).toThrowError('Weather is stormy');
    });
  });
});

function Airport(options) {
  this.DEF_CAPACITY = 10;
  this._hangar = [];
  this.capacity = typeof options.capacity !== 'undefined' ? options.capacity : 
                                                            this.DEF_CAPACITY;
  this.weather = typeof options.weather !== 'undefined' ? options.weather : 
                                                          new Weather();
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if(this.planes().length >= this.capacity) { throw new Error('Airport is full'); }
  if(this.weather.isStormy()) {throw new Error('Weather is stormy'); }
  plane.land(this);
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane){
  if(this.planes().indexOf(plane) === -1) { throw new Error('Plane not at airport');}
  if(this.weather.isStormy()) {throw new Error('Weather is stormy'); }
  plane.takeOff(this);
  this._hangar.splice(this._hangar.indexOf(plane), 1);
};

function Airport(weather){
  this._hangar = [];
  this.capacity = 10;
  //typeof is better to use as it is more secure
  //this.weather = weather || new Weather();
  //this.weather = new Weather();
  this.weather = typeof weather !== 'undefined' ? weather : new Weather();
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if(this.planes().length >= this.capacity) { throw new Error('Airport is full'); }
  if(this.weather.isStormy()) {throw new Error('Weather is stormy'); }
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane){
  if(this.planes().indexOf(plane) === -1) { throw new Error('Plane not at airport')}
  if(this.weather.isStormy()) {throw new Error('Weather is stormy'); }
  this._hangar.splice(this._hangar.indexOf(plane), 1);
};

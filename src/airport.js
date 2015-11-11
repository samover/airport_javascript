function Airport(){
  this._hangar = [];
  this.capacity = 10;
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if(this.planes().length >= this.capacity) { throw new Error('Airport is full'); }
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane){
  this._hangar.splice(this._hangar.indexOf(plane), 1);
};

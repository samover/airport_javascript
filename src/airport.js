function Airport(){
  this._hangar = [];
};

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane){
  this._hangar.splice(this._hangar.indexOf(plane), 1);
};

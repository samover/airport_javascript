function Plane(){
  this._flyStatus = false;
  this._location = 'air';
}

Plane.prototype.isLanded = function() {
  return this._flyStatus;
};

Plane.prototype.land = function(airport){
  if( this.isLanded()) { return 'A landed plane cannot land'; }
  this._flyStatus = true;
  this._location = airport;
};

Plane.prototype.takeOff = function() {
  if(this.isLanded() === false) { return 'A flying plane cannot take off'; }
  this._flyStatus = false;
};

Plane.prototype.locatedIn = function() {
  return this._location;
};

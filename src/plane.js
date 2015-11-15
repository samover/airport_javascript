function Plane() {
  this._landed = false;
  this._location = 'air';
  this.errorMsg = '';
}

Plane.prototype.land = function(airport){
  if(this._errLanding()) { throw new Error(this.errorMsg); }
  this._landed = true;
  this._location = airport;
};

Plane.prototype.takeOff = function() {
  if(this._errTakeOff()) { throw new Error(this.errorMsg); }
  this._landed = false;
  this._location = 'air';
};

Plane.prototype._locatedIn = function() {
  return this._location;
};

Plane.prototype._isLanded = function() {
  return this._landed;
};

Plane.prototype._errLanding = function() {
  this.errorMsg = this._isLanded() ? 'A landed plane cannot land' : '';
  var retVal = this.errorMsg === '' ? false : true;
  return retVal;
};

Plane.prototype._errTakeOff = function() {
  this.errorMsg = !this._isLanded() ? 'A flying plane cannot take off' : '';
  var retVal = this.errorMsg === '' ? false : true;
  return retVal;
};

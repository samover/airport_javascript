function Airport(options) {
  options = options === undefined ? {} : options;
  this.DEF_CAPACITY = 10;
  this._hangar = [];
  this.errorMsg = '';
  this.capacity = options.capacity === undefined ? this.DEF_CAPACITY : options.capacity;
  this.weather = options.weather === undefined ? new Weather() : options.weather;
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.land = function(plane) {
  if( this._errWeather() ||
      this._errFull()) { throw new Error(this.errorMsg); }
  plane.land(this);
  this._hangar.push(plane);
};

Airport.prototype.takeOff = function(plane){
  if( this._errWeather() ||
      this._errNotPresent(plane)) { throw new Error(this.errorMsg); }
  plane.takeOff();
  this._hangar.splice(this._hangar.indexOf(plane), 1);
};

Airport.prototype._errWeather = function() {
  this.errorMsg = this.weather.isStormy() ? 'Weather is stormy' : '';
  var retVal = this.errorMsg === '' ? false : true;
  return retVal;
};

Airport.prototype._errFull = function() {
  this.errorMsg =  this._isFull() ? 'Airport is full' : '';
  var retVal = this.errorMsg === '' ? false : true;
  return retVal;
};

Airport.prototype._errNotPresent = function(plane) {
  this.errorMsg = this._isNotPresent(plane) ? 'Plane not at airport' : '';
  var retVal = this.errorMsg === '' ? false : true;
  return retVal;
};

Airport.prototype._isFull = function() {
  var retVal = this.planes().length >= this.capacity ? true : false;
  return retVal;
};

Airport.prototype._isNotPresent = function(plane) {
  var retVal = this.planes().indexOf(plane) === -1 ? true : false;
  return retVal;
};

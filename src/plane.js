function Plane(){
  this.isLanded = false;
}

Plane.prototype.land = function(){
  this.isLanded = true;
};

Plane.prototype.takeOff = function() {
  this.isLanded = false; 
};

function Moveable(properties) {
  const {coordinates = [], vector = [], acceleration = [1, 1]} = properties;
  this.coordinates = coordinates;
  this.vector = vector;
  this.acceleration = acceleration;
}

Moveable.prototype.forward = function() {
  const nextLocation = {
    coordinates: this.coordinates
      .map((point, index) => point + this.vector[index])
  };
  const nextVector = {
    vector: this.vector.map((basis, index) => basis * this.acceleration[index])
  };
  const next = Object.assign({}, this, nextLocation, nextVector);
  return new this.constructor(next);
};

export default Moveable;

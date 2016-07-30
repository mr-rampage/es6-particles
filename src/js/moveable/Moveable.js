function Moveable(properties) {
  const {coordinates = [], vector = []} = properties;
  this.coordinates = coordinates;
  this.vector = vector;
}

Moveable.prototype.forward = function() {
  const nextLocation = {
    coordinates: this.coordinates
      .map((point, index) => point + this.vector[index])
  };
  const next = Object.assign({}, this, nextLocation);
  return new this.constructor(next);
};

export default Moveable;

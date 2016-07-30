import Moveable from "../moveable/Moveable";

function Particle(properties) {
  Moveable.call(this, properties);
  const { lifespan = 255, decay = 1 } = properties;
  this.lifespan = lifespan;
  this.decay = decay;
}

Particle.prototype = Object.create(Moveable.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.degrade = function() {
  const nextLife = { lifespan: this.lifespan - this.decay };
  const next = Object.assign({}, this, nextLife);
  return new this.constructor(next);
}

Particle.prototype.move = function() {
  return this.forward().degrade();
}

export default Particle;

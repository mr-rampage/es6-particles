import Moveable from "../moveable/Moveable";

function Particle(properties) {
  Moveable.call(this, properties);
  const {life = 255, decay = 1} = properties;
  this.life = life;
  this.decay = decay;
}

Particle.prototype = Object.create(Moveable.prototype);
Particle.prototype.constructor = Particle;

Particle.prototype.degrade = function() {
  const nextLife = {life: this.life - this.decay};
  const next = Object.assign({}, this, nextLife);
  return new this.constructor(next);
};

Particle.prototype.move = function() {
  return this.forward().degrade();
};

export default Particle;

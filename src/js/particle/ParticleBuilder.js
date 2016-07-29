import Particle from "./Particle";

export default function ParticleBuilder(coordinates = [], vector = [], lifespan = 255, decay = 1) {
  const self = this;
  this.at = (...coordinates) => new self.constructor(coordinates, vector, lifespan, decay);
  this.facing = (...vector) => new self.constructor(coordinates, vector, lifespan, decay);
  this.lifespan = (lifespan) => new self.constructor(coordinates, vector, lifespan, decay);
  this.decay = (decay) => new self.constructor(coordinates, vector, lifespan, decay);
  this.build = () => new Particle(coordinates, vector, lifespan, decay);
}

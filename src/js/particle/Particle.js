import Moveable from "../moveable/Moveable";

export default class Particle extends Moveable{
  constructor(properties) {
    super(properties);
    const { lifespan = 255, decay = 1 } = properties;
    this.lifespan = lifespan;
    this.decay = decay;
  }
}

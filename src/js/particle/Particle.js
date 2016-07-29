import Moveable from "../moveable/Moveable";

export default class Particle extends Moveable{
  constructor(coordinates, vector, lifespan, decay) {
    super(coordinates, vector);
    this.lifespan = lifespan;
    this.decay = decay;
  }
}

import {propertySetter} from "../utils/BuilderUtils";
import MoveableBuilder from "../moveable/MoveableBuilder";
import Particle from "./Particle";

export default function ParticleBuilder(product) {
  MoveableBuilder.call(this, product);

  this.lifespan = propertySetter.call(this, product, 'lifespan');
  this.decay = propertySetter.call(this, product, 'decay');
  this.build = () => new Particle(product);
}

import {propertySetter} from "../utils/BuilderUtils";
import MoveableBuilder from "../moveable/MoveableBuilder";
import Particle from "./Particle";

export default function ParticleBuilder(product) {
  MoveableBuilder.call(this, product);

  this.life = propertySetter.call(this, product, 'life');
  this.decay = propertySetter.call(this, product, 'decay');
  this.build = () => new Particle(product);
}

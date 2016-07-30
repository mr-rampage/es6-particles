import { propertySetter } from "../utils/BuilderUtils";
import MoveableBuilder from "../moveable/MoveableBuilder";

export default function ParticleBuilder(product) {
  MoveableBuilder.call(this, product);
  this.lifespan = propertySetter.call(this, product, 'lifespan');

  this.decay = propertySetter.call(this, product, 'decay');
    
  this.build = () => Object.assign({
    lifespan: 255,
    decay: 1
  }, product);
};

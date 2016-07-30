import { propertySetter } from "../utils/BuilderUtils";

export default function MoveableBuilder(product) {
  this.at = propertySetter.call(this, product, 'coordinates', true);
    
  this.facing = propertySetter.call(this, product, 'vector', true);
    
  this.build = () => Object.assign({
    coordinates: [],
    vector: []
  }, product);
};

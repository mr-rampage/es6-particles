import {propertySetter} from "../utils/BuilderUtils";
import Moveable from "./Moveable";

export default function MoveableBuilder(product) {
  this.at = propertySetter.call(this, product, 'coordinates', true);
  this.facing = propertySetter.call(this, product, 'vector', true);
  this.acceleration = propertySetter.call(this, product, 'acceleration', true);
  this.build = () => new Moveable(product);
}

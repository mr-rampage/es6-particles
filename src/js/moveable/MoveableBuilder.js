import {propertySetter} from "../utils/BuilderUtils";
import Moveable from "./Moveable";

export default function MoveableBuilder(product) {
  this.at = propertySetter.call(this, product, 'coordinates', true);
  this.facing = propertySetter.call(this, product, 'vector', true);
  this.build = () => new Moveable(product);
}

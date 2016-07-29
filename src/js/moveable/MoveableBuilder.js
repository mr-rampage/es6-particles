import Moveable from "./Moveable";

export default function MoveableBuilder(coordinates = [], vector = []) {
  const self = this;
  this.at = (...coordinates) => new self.constructor(coordinates, vector);
  this.facing = (...vector) => new self.constructor(coordinates, vector);
  this.build = () => new Moveable(coordinates, vector);
}

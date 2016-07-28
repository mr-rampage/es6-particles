import Moveable from "./Moveable";

function hasLength() {
  return (array) => {
    return array ? [...arguments].some((length) => array.length === length) : true;
  };
} 


export default class MoveableBuilder {

  constructor(moveable = new Moveable()) {
    this.moveable = moveable;
  }

  at(...coordinates) {
    if (hasLength(2, 0)(coordinates)) {
      this.moveable.coordinates = coordinates;
      return this;
    }
    throw "MoveableBuilder: Invalid Moveable coordinates";
  }

  facing(...vector) {
    if (hasLength(2, 0)(vector)) {
      this.moveable.vector = vector;
      return this;
    }
    throw "MoveableBuilder: Invalid Moveable vector";
  }

  build() {
    const product = new Moveable(this.moveable.coordinates, this.moveable.vector);
    this.moveable = new Moveable();
    return Object.freeze(product);
  }
}

function hasLength() {
  return (array) => {
    return array ? [...arguments].some((length) => array.length === length) : true;
  };
} 


export default class MoveableBuilder {

  constructor(coordinates = [], vector = []) {
    this.coordinates = coordinates;
    this.vector = vector;
  }

  at(...coordinates) {
    if (hasLength(2, 0)(coordinates)) {
      return new MoveableBuilder(coordinates, this.vector);
    }
    throw "MoveableBuilder: Invalid Moveable coordinates";
  }

  facing(...vector) {
    if (hasLength(2, 0)(vector)) {
      return new MoveableBuilder(this.coordinates, vector);
    }
    throw "MoveableBuilder: Invalid Moveable vector";
  }

  build() {
    return {
      coordinates: this.coordinates,
      vector: this.vector
    }
  }
}

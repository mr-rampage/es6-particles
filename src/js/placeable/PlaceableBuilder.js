function hasLength() {
  return (array) => {
    return array ? [...arguments].some((length) => array.length === length) : true;
  };
} 


export default class PlaceableBuilder {

  constructor(coordinates = [], vector = []) {
    this.coordinates = coordinates;
    this.vector = vector;
  }

  at(...coordinates) {
    if (hasLength(2, 0)(coordinates)) {
      return new PlaceableBuilder(coordinates, this.vector);
    }
    throw "PlaceableBuilder: Invalid Placeable coordinates";
  }

  facing(...vector) {
    if (hasLength(2, 0)(vector)) {
      return new PlaceableBuilder(this.coordinates, vector);
    }
    throw "PlaceableBuilder: Invalid Placeable vector";
  }

  build() {
    return {
      coordinates: this.coordinates,
      vector: this.vector
    }
  }
}

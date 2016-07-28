export default class Moveable {

  constructor(coordinates = [], vector = []) {
    this.coordinates = coordinates;
    this.vector = vector
  }

  forward() {
    return new Moveable(
      this.coordinates.map((point, index) => point + this.vector[index]),
      this.vector
    )
  }
}

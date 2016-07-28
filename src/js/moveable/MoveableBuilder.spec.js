import MoveableBuilder from "./MoveableBuilder";

describe("MoveableBuilder", () => {

  it("should create a Moveable with coordinates", () => {
    const moveable = new MoveableBuilder().at(1,1).build();
    expect(moveable.coordinates).toEqual([1,1]);
    expect(moveable.vector).toEqual([]);
  });

  it("should create a Moveable with a vector", () => {
    const moveable = new MoveableBuilder().facing(1,1).build();
    expect(moveable.coordinates).toEqual([]);
    expect(moveable.vector).toEqual([1,1]);
  });

  it("should create a Moveable with coordinates and a vector", () => {
    const moveable = new MoveableBuilder().at(2,2).facing(1,1).build();
    expect(moveable.coordinates).toEqual([2,2]);
    expect(moveable.vector).toEqual([1,1]);
  });

});

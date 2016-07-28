import MoveableBuilder from "./MoveableBuilder";

describe("MoveableBuilder", () => {

  it("should create a Moveable with coordinates", () => {
    const placeable = new MoveableBuilder().at(1,1).build();
    expect(placeable.coordinates).toEqual([1,1]);
    expect(placeable.vector).toEqual([]);
  });

  it("should create a Moveable with a vector", () => {
    const placeable = new MoveableBuilder().facing(1,1).build();
    expect(placeable.coordinates).toEqual([]);
    expect(placeable.vector).toEqual([1,1]);
  });

  it("should create a Moveable with coordinates and a vector", () => {
    const placeable = new MoveableBuilder().at(2,2).facing(1,1).build();
    expect(placeable.coordinates).toEqual([2,2]);
    expect(placeable.vector).toEqual([1,1]);
  });

});

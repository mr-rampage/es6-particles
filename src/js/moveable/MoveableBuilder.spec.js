import MoveableBuilder from "./MoveableBuilder";

describe("MoveableBuilder", () => {

  it("should create a Moveable with coordinates", () => {
    const actual = new MoveableBuilder().at(1,1).build();
    const expected = { coordinates: [1, 1], vector: [] };
    expect(actual).toEqual(expected);
  });

  it("should create a Moveable with a vector", () => {
    const actual = new MoveableBuilder().facing(1,1).build();
    const expected = { coordinates: [], vector: [1, 1] };
    expect(actual).toEqual(expected);
  });

  it("should create a Moveable with coordinates and a vector", () => {
    const actual = new MoveableBuilder().at(2,2).facing(1,1).build();
    const expected = { coordinates: [2, 2], vector: [1, 1] };
    expect(actual).toEqual(expected);
  });

});

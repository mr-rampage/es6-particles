import PlaceableBuilder from "./PlaceableBuilder";

describe("PlaceableBuilder", () => {

  it("should create a Placeable with coordinates", () => {
    const placeable = new PlaceableBuilder().at(1,1).build();
    expect(placeable.coordinates).toEqual([1,1]);
    expect(placeable.vector).toEqual([]);
  });

  it("should create a Placeable with a vector", () => {
    const placeable = new PlaceableBuilder().facing(1,1).build();
    expect(placeable.coordinates).toEqual([]);
    expect(placeable.vector).toEqual([1,1]);
  });

  it("should create a Placeable with coordinates and a vector", () => {
    const placeable = new PlaceableBuilder().at(2,2).facing(1,1).build();
    expect(placeable.coordinates).toEqual([2,2]);
    expect(placeable.vector).toEqual([1,1]);
  });

});

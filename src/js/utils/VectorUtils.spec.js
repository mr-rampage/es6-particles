import VectorUtils from "./VectorUtils";

describe('VectorUtils', () => {
  it('should calculate the norm of a vector', () => {
    expect(VectorUtils.norm([3, 4])).toEqual(5);
  });

  it('should calculate the unit vector', () => {
    const unitVector = Array(2).fill().map(() => Math.sqrt(2) / 2);
    expect(VectorUtils.normalize([3, 3])).toEqual(unitVector);
  });
});

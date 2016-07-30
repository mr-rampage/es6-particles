import ParticleBuilder from "./ParticleBuilder";
import Particle from "./Particle";

describe("ParticleBuilder", () => {

  it('should create a Moveable Particle with default 255 life and decay 1', () => {
    const actual = new ParticleBuilder().at(1, 1).facing(2, 1).build();
    const expected = new Particle({ coordinates: [1, 1], vector: [2, 1] });
    expect(expected).toEqual(actual);
  });

  it('should create a Moveable Particle 50 life and decay 5', () => {
    const actual = new ParticleBuilder().at(1, 1).facing(2, 1).lifespan(50).decay(5).build();
    const expected = new Particle({ coordinates: [1, 1], vector: [2, 1],
      lifespan: 50, decay: 5 });
    expect(expected).toEqual(actual);
  });

});

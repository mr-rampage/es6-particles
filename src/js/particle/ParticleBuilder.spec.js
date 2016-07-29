import ParticleBuilder from "./ParticleBuilder";
import Particle from "./Particle";

describe("ParticleBuilder", () => {

  it('should create a Particle with 255 life and decay 1', () => {
    const actual = new ParticleBuilder().at(1, 1).facing(2, 1).build();
    const expected = new Particle([1, 1], [2, 1], 255, 1);
    expect(expected).toEqual(actual);
  });

  it('should create a Particle 50 life and decay 5', () => {
    const actual = new ParticleBuilder().at(1, 1).facing(2, 1).lifespan(50).decay(5).build();
    const expected = new Particle([1, 1], [2, 1], 50, 5);
    expect(expected).toEqual(actual);
  });

});

import PixelRenderer from "../renderer/PixelRenderer";
import ParticleBuilder from "./ParticleBuilder";
import VectorUtils from "../utils/VectorUtils";

function initializeParticles(settings) {
  const particleBuilder = new ParticleBuilder()
    .at(settings.origin[0], settings.origin[1])
    .life(settings.particleLife)
    .decay(settings.particleDecay);
  return Array(settings.numberOfParticles).fill().map(() =>
    particleBuilder
      .facing.apply(particleBuilder,
        VectorUtils.random(2, settings.maxVelocity))
      .build());
}

export default function createParticleExplosion(settings) {
  const renderer = new PixelRenderer(settings.context);
  let particles = initializeParticles(settings);
  let erasers = null;

  return function drawFrame() {
    if (erasers && erasers.length) {
      erasers.forEach(eraser => eraser());
    }

    erasers = particles.map(particle =>
      renderer.draw(particle.coordinates,
        settings.particleColour.concat([particle.life]),
        settings.backgroundColour));

    particles = particles
      .map(particle => particle.move())
      .filter(particle => particle.life > 0);

    if (particles.length === 0) {
      settings.onComplete();
    }
  };
}

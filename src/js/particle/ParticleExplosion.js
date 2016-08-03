import ParticleAdapter from "./ParticleAdapter";
import PixelRenderer from "../renderer/PixelRenderer";
import ParticleBuilder from "./ParticleBuilder";
import VectorUtils from "../utils/VectorUtils";

const randomNumber = (min, max) => Math.random() * (max - min) + min;

function createParticleBuilder(settings) {
  const particleBuilder = new ParticleBuilder();
  return particleBuilder
    .at.apply(particleBuilder, settings.origin);
}

function initializeParticles(settings) {
  const particleBuilder = createParticleBuilder(settings);
  return Array(settings.numberOfParticles).fill().map(() =>
    particleBuilder
      .facing.apply(particleBuilder,
        VectorUtils.random(2, settings.maxVelocity))
      .acceleration(randomNumber(0.9, 0.99), randomNumber(0.9, 0.99))
      .life(randomNumber(200, settings.particleLife))
      .decay(randomNumber(3, settings.particleDecay))
      .build());
}

const inCanvas = particle =>
  particle.coordinates[0] >= 0 &&
  particle.coordinates[1] >= 0;

export default function createParticleExplosion(settings) {
  const renderer = new PixelRenderer(settings.context);
  let particles = initializeParticles(settings);

  return function drawFrame() {
    settings.onFrameStart();

    particles
      .map(particle => {
        const pixel = ParticleAdapter.toPixel(
          particle, settings.particleColour);
        pixel.push(settings.backgroundColour);
        return renderer.draw.apply(renderer, pixel);
      });

    particles = particles
      .map(particle => particle.move())
      .filter(particle => inCanvas(particle) &&
        particle.life > 0);

    if (particles.length === 0) {
      settings.onComplete();
    } else {
      requestAnimationFrame(drawFrame);
    }
  };
}

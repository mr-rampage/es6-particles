import PixelRenderer from "./renderer/PixelRenderer";
import ParticleBuilder from "./particle/ParticleBuilder";

const canvasContext = document.getElementById('particleCanvas')
  .getContext('2d');
const renderer = new PixelRenderer(canvasContext);

const randomDirection = () => Math.random() >= 0.5 ? 1 : -1;
const randomVelocity = velocity =>
  randomDirection() * Math.random() * (velocity) + 1;

const timerId = setInterval(createParticleExplosion(250), 32);

function createParticleExplosion(numberOfParticles) {
  const COLOUR = [32, 32, 32];
  const particleBuilder = new ParticleBuilder().at(200, 200).life(255).decay(5);
  let particles = Array(numberOfParticles).fill().map(() =>
    particleBuilder.facing(randomVelocity(4), randomVelocity(4)).build());

  let erasers = null;

  return function drawFrame() {
    if (erasers && erasers.length) {
      erasers.forEach(eraser => eraser());
    }

    erasers = particles.map(particle =>
      renderer.draw(particle.coordinates, COLOUR.concat([particle.life])));

    particles = particles
      .map(particle => particle.move())
      .filter(particle => particle.life > 0);

    if (particles.length === 0) {
      console.debug('All particles done!');
      clearInterval(timerId);
    }
  };
}

import createParticleExplosion from "./particle/ParticleExplosion";

const canvasContext = document.getElementById('particleCanvas')
  .getContext('2d');
let timerId;

const EXPLOSION_SETTINGS = {
  acceleration: [0.95, 0.95],
  backgroundColour: [255, 255, 255, 255],
  context: canvasContext,
  maxVelocity: 20,
  numberOfParticles: 500,
  origin: [200, 200],
  onComplete: () => {
    console.debug('All particles done!');
    clearInterval(timerId);
  },
  particleColour: [32, 32, 32],
  particleDecay: 5,
  particleLife: 255
};

timerId = setInterval(createParticleExplosion(EXPLOSION_SETTINGS), 16);

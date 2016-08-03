import createParticleExplosion from "./particle/ParticleExplosion";

const canvas = document.getElementById('particleCanvas');
const canvasContext = canvas.getContext('2d');

const EXPLOSION_SETTINGS = {
  backgroundColour: [0, 0, 0, 0],
  context: canvasContext,
  maxVelocity: 20,
  numberOfParticles: 250,
  origin: [200, 200],
  onComplete: () => {
    console.debug('All particles done!');
  },
  onFrameStart: () => {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  },
  particleColour: [0, 0, 0],
  particleDecay: 5,
  particleLife: 255
};

createParticleExplosion(EXPLOSION_SETTINGS)();

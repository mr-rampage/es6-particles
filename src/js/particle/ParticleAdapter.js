function ParticleAdapter() {}

ParticleAdapter.toPixel = (particle, colour) =>
  [
    particle.coordinates.map(basis => Math.round(basis)),
    colour.concat([particle.life])
  ];

export default ParticleAdapter;

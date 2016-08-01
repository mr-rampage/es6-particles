function VectorUtils() {}

VectorUtils.norm = vector => Math.sqrt(vector.reduce((length, basis) =>
  length + basis * basis, 0));

VectorUtils.normalize = vector => {
  const norm = VectorUtils.norm(vector);
  return vector.map(basis => basis / norm);
};

VectorUtils.random = (dimension, norm) => {
  const randomDirection = () => Math.random() >= 0.5 ? 1 : -1;
  const randomInteger = () => Math.floor(Math.random() * norm) + 0.5;
  const vector = Array(dimension).fill().map(() =>
    randomDirection() * Math.random());
  const unitVector = VectorUtils.normalize(vector);
  return unitVector.map(basis => basis * randomInteger());
};

export default VectorUtils;

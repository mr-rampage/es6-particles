export function propertySetter(source, property, asArray) {
  const newProperty = {};
  return (...args) => {
    newProperty[property] = asArray ? args : args[0];
    return new this.constructor(Object.assign({}, source, newProperty));
  };
}


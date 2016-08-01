export default function PixelRenderer(context) {
  const pixel = context.createImageData(1, 1);

  const setColour = colour =>
    colour.forEach((value, index) => {
      pixel.data[index] = value;
    });

  const getColourAt = location =>
    context.getImageData(location[0], location[1], 1, 1).data;

  this.draw = function(location, colour, defaultColour) {
    const originalColour = defaultColour || getColourAt(location)
      .map(value => value);
    setColour(colour);
    context.putImageData(pixel, location[0], location[1]);

    return function erase() {
      setColour(originalColour);
      context.putImageData(pixel, location[0], location[1]);
    };
  };
}

export default function PixelRenderer(context) {
  const pixel = context.createImageData(1, 1);

  const setColour = colour =>
    colour.forEach((value, index) => {
      pixel.data[index] = value;
    });

  this.draw = function(location, colour, defaultColour) {
    setColour(colour);
    context.putImageData(pixel, location[0], location[1]);
  };
}

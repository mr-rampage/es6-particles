export default function PixelRenderer(context) {
  const pixel = context.createImageData(2, 2);

  const setColour = colour => {
    for (let i = 0; i < pixel.data.length;) {
      for (let value of colour) {
        pixel.data[i++] = value;
      }
    }
  };

  this.draw = function(location, colour) {
    setColour(colour);
    context.putImageData(pixel, location[0], location[1]);
  };
}

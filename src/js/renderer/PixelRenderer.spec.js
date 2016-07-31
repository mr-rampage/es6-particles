import PixelRenderer from "./PixelRenderer";

describe('PixelRenderer', () => {
  let renderer;
  let eraser;
  const pixel = {
    data: []
  };

  const MOCK_CANVAS = {
    createImageData: () => {},
    getImageData: () => {},
    putImageData: () => {}
  };

  beforeEach(() => {
    spyOn(MOCK_CANVAS, 'createImageData').and.returnValue(pixel);
    spyOn(MOCK_CANVAS, 'putImageData').and.callThrough();
    spyOn(MOCK_CANVAS, 'getImageData').and.returnValue(pixel);
  });

  beforeEach(() => {
    pixel.data = [9, 9, 9, 255];
    renderer = new PixelRenderer(MOCK_CANVAS);
    eraser = renderer.draw([1, 1], [100, 100, 100, 50]);
  });

  it('should set the pixel colour at 1, 1 on draw', () => {
    expect(MOCK_CANVAS.putImageData).toHaveBeenCalledWith(pixel, 1, 1);
  });

  it('should draw a pixel at 1, 1 on draw', () => {
    expect(pixel.data).toEqual([100, 100, 100, 50]);
  });

  it('should curry the original colour', () => {
    expect(MOCK_CANVAS.getImageData).toHaveBeenCalled();
  });

  it('should return the pixel on erase', () => {
    eraser();
    expect(pixel.data).toEqual([9, 9, 9, 255]);
    expect(MOCK_CANVAS.putImageData).toHaveBeenCalledWith(pixel, 1, 1);
  });
});

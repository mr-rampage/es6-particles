import PixelRenderer from "./PixelRenderer";

describe('PixelRenderer', () => {
  const pixel = {
    data: []
  };

  const MOCK_CANVAS = {
    createImageData: () => {},
    putImageData: () => {}
  };

  beforeEach(() => {
    spyOn(MOCK_CANVAS, 'createImageData').and.returnValue(pixel);
    spyOn(MOCK_CANVAS, 'putImageData').and.callThrough();
  });

  beforeEach(() => {
    pixel.data = [9, 9, 9, 255];
    const renderer = new PixelRenderer(MOCK_CANVAS);
    renderer.draw([1, 1], [100, 100, 100, 50]);
  });

  it('should set the pixel colour at 1, 1 on draw', () => {
    expect(MOCK_CANVAS.putImageData).toHaveBeenCalledWith(pixel, 1, 1);
  });

  it('should draw a pixel at 1, 1 on draw', () => {
    expect(pixel.data).toEqual([100, 100, 100, 50]);
  });
});

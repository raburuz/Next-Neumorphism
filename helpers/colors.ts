export const hexToRgb = (hex: string, value: number) => {
  const number = hex.slice(1);
  const red = parseInt(number.slice(0, 2), 16);
  const green = parseInt(number.slice(2, 4), 16);
  const blue = parseInt(number.slice(4, 6), 16);

  const redValue = {
    first: red + value < 255 ? red + value : 255,
    second: red - value > 0 ? red - value : 0,
  };
  const greenValue = {
    first: green + value < 255 ? green + value : 255,
    second: green - value > 0 ? green - value : 0,
  };
  const blueValue = {
    first: blue + value < 255 ? blue + value : 255,
    second: blue - value > 0 ? blue - value : 0,
  };

  const combineColors = {
    first:
      '#' +
      rgbToHex(redValue.first) +
      rgbToHex(greenValue.first) +
      rgbToHex(blueValue.first),
    second:
      '#' +
      rgbToHex(redValue.second) +
      rgbToHex(greenValue.second) +
      rgbToHex(blueValue.second),
  };

  return combineColors;
};

const rgbToHex = (int: number) => {
  const hex = int.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};

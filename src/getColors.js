import Vibrant from 'node-vibrant/dist/vibrant';

const DEBUG_COLOR = false;
const CONTRAST_RATIO = 4.5;
const COLOR_SIMILARITY_THRESHOLD = 150;

const luminosity = (rgb) => {
  const lum = [0, 0, 0];
  for (let i = 0; i < rgb.length; i++) {
    const chan = rgb[i] / 255;
    lum[i] = chan <= 0.03928 ? chan / 12.92 : ((chan + 0.055) / 1.055) ** 2.4;
  }
  return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
};

const rgbContrast = (color1, color2) => {
  const lum1 = luminosity(color1);
  const lum2 = luminosity(color2);
  if (lum1 > lum2) {
    return (lum1 + 0.05) / (lum2 + 0.05);
  }
  return (lum2 + 0.05) / (lum1 + 0.05);
};

const getRGBContrastRatio = (rgb1, rgb2) =>
  Math.round((rgbContrast(rgb1, rgb2) + Number.EPSILON) * 100) / 100;

export const extractColors = async (url, downsampleColors = 16) => {
  const palette = await Vibrant.from(url, {
    colorCount: downsampleColors,
  }).getPalette();
  const colors = Object.values(palette);

  colors.sort((colorA, colorB) => colorB.population - colorA.population);

  const backgroundColor = colors[0];
  let foregroundColor;

  const contrastRatios = new Map();
  const approvedContrastRatio = (hex, rgb) => {
    if (!contrastRatios.has(hex)) {
      contrastRatios.set(hex, getRGBContrastRatio(backgroundColor.rgb, rgb));
    }
    return contrastRatios.get(hex) > CONTRAST_RATIO;
  };

  for (let i = 1; i < colors.length && !foregroundColor; i++) {
    if (approvedContrastRatio(colors[i].hex, colors[i].rgb)) {
      if (DEBUG_COLOR) console.log('PICKED', colors[i].hex);
      foregroundColor = colors[i].rgb;
      break;
    }

    const currentColor = colors[i];
    if (DEBUG_COLOR)
      console.log(
        'Finding similar color with better contrast',
        currentColor.hex
      );

    for (let j = i + 1; j < colors.length; j++) {
      const compareColor = colors[j];
      const diffScore =
        Math.abs(currentColor.rgb[0] - compareColor.rgb[0]) +
        Math.abs(currentColor.rgb[1] - compareColor.rgb[1]) +
        Math.abs(currentColor.rgb[2] - compareColor.rgb[2]);

      if (DEBUG_COLOR) console.log(compareColor.hex, diffScore);

      if (diffScore > COLOR_SIMILARITY_THRESHOLD) continue;

      if (approvedContrastRatio(compareColor.hex, compareColor.rgb)) {
        if (DEBUG_COLOR) console.log('PICKED', compareColor.hex);
        foregroundColor = compareColor.rgb;
        break;
      }
    }
  }

  if (!foregroundColor) {
    foregroundColor =
      backgroundColor.getYiq() < 200 ? [255, 255, 255] : [0, 0, 0];
  }

  return {
    background: backgroundColor,
    foreground: foregroundColor,
    foregroundHEX: new backgroundColor.constructor(foregroundColor, 0).hex,
  };
};

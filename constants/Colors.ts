const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export enum ColorDao {
  topPrimaryGradient = "#E31937",
  bottomPrimaryGradient = "#F49332",
  topBackgroundGradient = "#1A1F24",
  bottomBackgroundGradient = "#5E6166",
  aquaBG = "#00ecfa",
  greenBG = "#00E606",
  blueBG = "#91A6FF",
  magentaBG = "#5F0F40",
  deepPurpleBG = "#310E68",
}

export function convertToColorRGBA(hexColor: string, opacity: number): string {
  // Parse the hexadecimal color string to RGB components
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);

  // Ensure opacity is within the valid range (0 to 1)
  const validOpacity = Math.max(0, Math.min(1, opacity));

  // Convert RGB to RGBA format with the specified opacity
  const rgbaColor = `rgba(${red}, ${green}, ${blue}, ${validOpacity})`;

  return rgbaColor;
}

export const generateRadomBGColors = (): string[] => {
  const originalPalette = [
    ColorDao.bottomPrimaryGradient,
    ColorDao.aquaBG,
    ColorDao.greenBG,
    ColorDao.blueBG,
    ColorDao.magentaBG,
    ColorDao.deepPurpleBG,
  ];
  // Generate a random index within the range of the originalPalette array
  const randomIndex = generateRandomIndex(originalPalette.length);
  const startColor = originalPalette[randomIndex]
  const endColor = convertToColorRGBA(startColor, 0.4)
  return [startColor, endColor]
};
function generateRandomIndex(maxIndex: number): number {
  return Math.floor(Math.random() * maxIndex);
}
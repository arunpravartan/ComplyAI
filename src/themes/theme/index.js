// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //

export default function Theme(colors) {
  const { blue, red, gold, cyan, green, grey } = colors;
  const primaryPalette = [
    "#E3EFF9", // 50 - Very Light Blue
    "#BCD7F0", // 100 - Lighter Blue
    "#92BDE7", // 200 - Light Blue
    "#669FDA", // 300 - Soft Blue
    "#3E85CE", // 400 - Sky Blue
    "#00579B", // 500 - Main Primary
    "#004F8E", // 600 - Slightly Darker
    "#00467D", // 700 - Dark Blue
    "#003A69", // 800 - Deep Navy Blue
    "#002748"  // 900 - Almost Black Blue
  ];
  const greyColors = {
    0: grey[0],
    50: grey[1],
    100: grey[2],
    200: grey[3],
    300: grey[4],
    400: grey[5],
    500: grey[6],
    600: grey[7],
    700: grey[8],
    800: grey[9],
    900: grey[10],
    A50: grey[15],
    A100: grey[11],
    A200: grey[12],
    A400: grey[13],
    A700: grey[14],
    A800: grey[16]
  };
  const contrastText = '#fff';

  return {
    primary: {
      lighter: primaryPalette[0],
      50: primaryPalette[0],
      100: primaryPalette[1],
      200: primaryPalette[2],
      light: primaryPalette[2],
      300: primaryPalette[3],
      400: primaryPalette[4],
      500: primaryPalette[5],
      main: primaryPalette[5],
      600: primaryPalette[6],
      dark: primaryPalette[7],
      700: primaryPalette[7],
      800: primaryPalette[7],
      darker: primaryPalette[9],
      900: primaryPalette[9],
      contrastText
    },
    secondary: {
      lighter: greyColors[100],
      100: greyColors[100],
      200: greyColors[200],
      light: greyColors[300],
      400: greyColors[400],
      main: greyColors[500],
      600: greyColors[600],
      dark: greyColors[700],
      800: greyColors[800],
      darker: greyColors[900],
      A100: greyColors[0],
      A200: greyColors.A400,
      A300: greyColors.A700,
      contrastText: greyColors[0]
    },
    error: {
      lighter: red[0],
      light: red[2],
      main: red[4],
      dark: red[7],
      darker: red[9],
      contrastText
    },
    warning: {
      lighter: gold[0],
      light: gold[3],
      main: gold[5],
      dark: gold[7],
      darker: gold[9],
      contrastText: greyColors[100]
    },
    info: {
      lighter: cyan[0],
      light: cyan[3],
      main: cyan[5],
      dark: cyan[7],
      darker: cyan[9],
      contrastText
    },
    success: {
      lighter: green[0],
      light: green[3],
      main: green[5],
      dark: green[7],
      darker: green[9],
      contrastText
    },
    grey: greyColors
  };
}

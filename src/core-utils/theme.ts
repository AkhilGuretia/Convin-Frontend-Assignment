import { createTheme } from "@mui/material";

export const pxToRem = (fontSize: number) => {
  return `${fontSize / 16}rem`;
};

// A custom theme for the application
const theme = createTheme({
  palette: {
    primary: {
      main: "#0052ff",
      light: "#66a1ff",
      dark: "#002eb7",
    },
    warning: {
      main: "#f8d676",
    },
    success: {
      main: "#12cc65",
    },
    common: {
      black: "#06192d",
      white: "#ffffff",
    },
    error: {
      main: "#e6461c",
    },
    background: {
      default: "#FAFCFF",
      paper: "#ffffff",
    },
    text: {
      primary: "#343446",
      secondary: "#5c6f84",
      disabled: "#748aa1",
    },
    grey: {
      100: "#E8E8F7",
      200: "#ececf7",
      300: "#b4b4cf",
      400: "#4b4b60", //border color
      500: "#252545",
      600: "#0e0e2e",
      700: "#55535a",
      900: "#2e2c34",
    },
    action: {
      disabled: "#fbfafc",
      disabledBackground: "#d3edff",
    },
  },
  spacing: 4,
  shadows: [
    "none",
    "", // paper
    "", // button
    "", // paper
    "", // outlined button
    "",
    "", //menu item
    "0px 12px 16px rgba(0, 0, 0, 0.08)", //card
    "",
    "", //card - hover
    "0px 4px 40px 0px rgba(237, 243, 250, 0.8)", //timeSelection
    "3px 1px 16px 0px rgba(0, 104, 178, 0.08)", //dashboardOverview
    "0px 4px 20px rgba(40, 40, 40, 0.08)", //policy violation card
    "0px 4px 20px rgba(0, 0, 0, 0.1)", //policy right panel expand collapse state
    "0px 3px 8px rgba(0, 0, 0, 0.12)", //time switch
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  transitions: {
    duration: {
      enteringScreen: 200,
      leavingScreen: 200,
    },
  },
  typography: {
    fontFamily: "Graphik",
    h1: {
      fontSize: "32px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "45px",
      letterSpacing: "0.8px",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "34px",
      letterSpacing: "0.8px",
    },
    h3: {
      fontSize: "22px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "32px",
      letterSpacing: "0.8px",
    },
    h4: {
      fontSize: "40px",
      fontWeight: "bold",
      fontStyle: "normal",
      lineHeight: "54px",
      letterSpacing: "0.8px",
    },
    subtitle1: {
      fontSize: "18px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "26px",
      letterSpacing: "0.8px",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "23px",
      letterSpacing: "0.8px",
    },
    body1: {
      fontSize: "16px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "28px",
      letterSpacing: "0.8px",
    },
    body2: {
      fontSize: "14px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "22px",
      letterSpacing: "0.8px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
      fontStyle: "normal",
      lineHeight: "12px",
      letterSpacing: "0.8px",
    },
    overline: {
      fontSize: "12px",
      fontWeight: 600,
      fontStyle: "normal",
      lineHeight: "18px",
      letterSpacing: "0.8px",
    },
    h6: {
      fontSize: "0.8em",
    },
  },
});

export default theme;

export const EXTRA_COLORS = {
  blue: "#1072f1",
  lightBlue: "#e4effd",
  lightBlue_100: "#D7E4F1",
  blusihWhite: "#E6F2FF",
  blueBackground: "#0196FF",
  green: "#29c79f",
  greenCyan: "#B4CEBE",
  lightGreen: "#e3fbf5",
  lightGreenCyan: "#E5F9EE",
  greenBackground: "#15C6A7",
  fauxMintCream: "#F5FFF9",
  cyan: "#DAFCFF",
  mediumCyan: "#00BBCC",
  orange: "#FFA74F",
  lightOrange: "#FFF6ED",
  darkRed: "#B71A33",
  darkRed_100: "#B23413",
  darkRed_200: "#DC2E00",
  redBackground: "#E6461C",
  red: "#e34a30",
  red_100: "#FF5E48",
  teritary_blue: "#EDF7FF",
  lightRed: "#fcebe8",
  paleRed: "#FFF6F3",
  violet: "#8266c9",
  lightViolet: "#f1eef9",
  grey: "#84818a",
  darkGrayish: "#5C6F84",
  black: "#000000",
  yellow: "#C29616",
  lightYellow: "#FDF1D1",
  // Used for element border color
  lightYellowBackground: "#FFFAEB",
  lightYellowBorder: "#FFF2CB",
  darkYellowBorder: "#E6C25B",
  lightGray: "#F1F2F4",
  lightGrayishBlue: "#edf4fc",
  lightBluishBackground: "#F0F8FF",
  bluishBackground: "#FAFDFF",
  skyBlue: "#3396FF",
  accentBlue: "#B9DBFF",
  alphaPrimary: "#E5F2FF",
  accentBlue_100: "#7ABAFF",
  accentBlue_300: "#308AEB",
  accentGreen_400: "#20c9ac1a",
  accentGreen_900: "#20C9AC",
  whiteSmoke: "#f5f5f5",
  blue_100: "#E2EDF9",
  blue_200: "#5CABFF",
  blue_400: "#1081D2",
  blue_500: "#00A5FF",
  redishOrange: "#F89E87",
  mediumRedOrange: "#FFAF9A",
  mediumGray: "#C4C4C4",
  mediumRed: "#E28168",
  mediumOrange: "#F9C7BA",
  lightRedOrange: "#FBE2DB",
  whiteOverlay: "rgba(255, 255, 255, 0.71)",
  warning_300: "#C29616",
  greyMedium: "#9B9B9B",
  pinkDark: "#FA699D",
  orangeMedium: "#FFA043",
  lightPink: "#faf2f5",
  greyBackground: "#ECECEC",
  mediumBlue_100: "#92B3D4",
  aqua: "#00E0F5",
  lightAqua: "#ebf4f5",
  greyOut: 0.3,
  greyOutDefault: 1,
  alphaPrimary_100: "#F2FAFF",
  greyFont: "#748AA1",
  blackFont: "#343446",
};

export const customStyles = {
  scrollBar: {
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.grey[500],
      borderRadius: "10px",
    },
  },
};

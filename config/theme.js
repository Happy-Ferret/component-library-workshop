// common colors
const chrome000 = "#FFFFFF";
const chrome200 = "#A9BCC6";
const chrome300 = "#7B8493";
const chrome500 = "#24324C";
const chrome700 = "#101A2D";
const blue = "#4081F0";
const green = "#40F0B0";
const lightBlue = "#40D9F0";
const purple = "#5840F0";
const red = "#F05942";
const yellow = "#F0B040";

module.exports = {
  colors: {
    blue,
    green,
    lightBlue,
    purple,
    red,
    // ui colors
    ui: {
      background: chrome000,
      link: blue,
      linkHover: lightBlue,
      linkVisited: purple,
      text: chrome500,
      textlight: chrome300,
      // grayscale
      chrome000,
      chrome200,
      chrome300,
      chrome500,
      chrome700
    },
    // brand colors
    brand: {
      primary: chrome500,
      secondary: red,
      tertiary: "#FDE4A9"
    },
    // status colors
    status: {
      danger: red,
      info: blue,
      success: green,
      warning: yellow
    }
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: "2px"
  },
  font: {
    primary: "Open Sans",
    primaryFallback: "Helvetica, Arial, sans-serif",
    weights: {
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      extraSmall: 12,
      small: 14,
      medium: 16,
      large: 18,
      h1: 40,
      h2: 36,
      h3: 32,
      h4: 28,
      h5: 24,
      h6: 20
    }
  }
};

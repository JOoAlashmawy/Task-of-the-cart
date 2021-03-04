/* eslint-disable no-unused-vars */
import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import red from "@material-ui/core/colors/red";

const primary = red[500]; // #f44336
// const accent = purple.A200; // #e040fb (alternative method)
const accent = purple["A200"]; // #e040fb

const theme = createMuiTheme({
  //   shadows: [
  //     "0px 2px 1px -1px rgba(0,0,0,0.8),0px 1px 1px 0px rgba(0,0,0,0.814),0px 1px 3px 0px rgba(0,0,0,0.82)",
  //   ],
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "white", default: "#fa55fa" },
    primary: {
      light: "rgba(248, 231, 28, 1)",
      // main: "rgba(248, 231, 28, 1)",
      main: "rgba(244,235,141,1)",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(171,130,50,1)",
      dark: "#c51162",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "#212121",
      secondary: "rgba(76, 76, 76, 1)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
const theme2 = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" }, // This is just green.A700 as hex.
  },
  typography: { useNextVariants: true },
});

export default theme;

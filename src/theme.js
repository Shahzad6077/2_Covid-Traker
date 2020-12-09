const { createMuiTheme } = require("@material-ui/core");

const themeProvider = createMuiTheme({
  palette: {
    red: "#ff6638",
    orange: "#ff9f24",
    grey: "#fff9f2",
    darkBlue: "#055cf8",
    lightBlue: "#53d7e4",
    black: "#1a0036",
    primary: {
      main: "#ff9f24",
    },
    secondary: {
      main: "#1a0036",
    },
  },
  typography: {
    quickSand: "Quicksand,sans-serif",
  },
});

export default themeProvider;

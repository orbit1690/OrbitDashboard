import { createMuiTheme, Theme, useTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    ripple: Palette["primary"];
  }
  interface PaletteOptions {
    ripple: PaletteOptions["primary"];
  }
}

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: "light",
    ripple: {
      main: "",
    },
  },
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: "dark",
    ripple: {
      main: grey[300],
    },
  },
});

export const isDarkTheme = (): boolean => useTheme().palette.type === "dark";

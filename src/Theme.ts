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

export const theme: Theme = createMuiTheme({
  palette: {
    type: "light",
    ripple: {
      dark: grey[300],
      main: "",
    },
  },
});

export const isDarkTheme = (): boolean => useTheme().palette.type === "dark";

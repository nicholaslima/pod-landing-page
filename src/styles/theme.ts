import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    green: {
      green: "#54E6AF",
      Light: "#B3FFE2",
    },
    red: "#FB3E3E",
    gray: {
      dark: "#2C344B",
      medium: "#5A668A",
      light: " #C2CBE5",
    },
    dark: "#121725",
    white: "#FFFFFF",
  },
  styles: {
    global: {
      body: {
        bg: "dark",
        color: "gray.light",
      },
    },
  },
  fonts: {
    body: ["Chivo", "sans-serif"],
  },
});

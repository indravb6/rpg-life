"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Pixelify Sans, sans-serif",
    button: {
      textTransform: "none",
    },
  },
  palette: {
    background: {
      default: "#000000",
      paper: "#215B63",
    },
    text: {
      primary: "#FFFFFF",
    },
    primary: {
      main: "#01579b",
    },
    action: {
      hover: "#333333",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        text: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#FFFFFF",
            },
          },
        },
      },
    },
  },
});

export default theme;

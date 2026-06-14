"use client";
import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: '"Jersey 15", sans-serif',
    button: {
      fontFamily: '"Jersey 15", sans-serif',
      letterSpacing: "1px",
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

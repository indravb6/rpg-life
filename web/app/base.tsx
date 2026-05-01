"use client";
import { Box, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { ReactNode } from "react";
import theme from "../app/theme";

export function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseStyling>{children}</BaseStyling>
    </ThemeProvider>
  );
}

function BaseStyling({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return <Box sx={{ backgroundColor: theme.palette.background.default }}>{children}</Box>;
}

"use client";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import theme from "../app/theme";

export function AppProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

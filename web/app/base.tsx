"use client";
import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";

export function BaseStyling({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return <Box sx={{ backgroundColor: theme.palette.background.default }}>{children}</Box>;
}

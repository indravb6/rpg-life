import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { BaseStyling } from "./base";
import "./globals.css";
import theme from "./theme";

export const metadata: Metadata = {
  title: "RPG Life",
  icons: {
    icon: "/images/rpg-life.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BaseStyling>{children}</BaseStyling>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

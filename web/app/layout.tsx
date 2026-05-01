import type { Metadata } from "next";
import { BaseLayout } from "./base";
import "./globals.css";

export const metadata: Metadata = {
  title: "RPG Life",
  icons: {
    icon: "/rpg-life.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

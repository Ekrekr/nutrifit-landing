"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export function UseTheme({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export { theme };

import { createContext, useState, useMemo, useEffect } from "react";
import { createTheme, colors } from "@mui/material";

// color design tokens export
// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.blue[400],
            },
            secondary: {
              main: colors.common.black,
            },
            neutral: {
              dark: colors.amber[700],
              main: colors.amber[500],
              light: colors.amber[100],
            },
            background: {
              default: colors.grey[900],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.purple[100],
            },
            secondary: {
              main: colors.purple[500],
            },
            neutral: {
              dark: colors.purple[700],
              main: colors.purple[500],
              light: colors.purple[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [LSTheme, setLSTheme] = useState(localStorage.theme);
  const [mode, setMode] = useState(LSTheme);
  useEffect(() => {
    localStorage.setItem("theme", LSTheme || "light");
  }, [LSTheme]);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
        setLSTheme(LSTheme === "light" ? "dark" : "light");
      },
    }),
    [LSTheme]
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
          1000:"#000000",
          1100: "Grey",
        },
        primary: {
          100: "#426fb3", // darker light royal blue
          200: "#2b5b9d", // darker soft blue
          300: "#1f4c89", // darker vibrant blue
          400: "#163a7a", // darker royal blue
          500: "#123468", // darker deep blue
          600: "#0f2c55", // darker blue
          700: "#0c2548", // darker rich dark blue
          800: "#0a1e3b", // darker very dark blue
          900: "#06162d", // darker darkest navy blue
        },
        
        
        blueAccent: {
          100: "#f8c7a1", // light orange
          200: "#f2a375", // soft orange
          300: "#ec8f4a", // pastel orange
          400: "#f36617", // vibrant orange
          500: "#d05316", // deeper orange
          600: "#b64714", // darker orange
          700: "#9a3b12", // rich dark orange
          800: "#7d2e10", // very dark orange
          900: "#611c0e", // darkest orange
          
        },
        
        greenAccent: {
          100: "#f8c7a1", // light orange
          200: "#f2a375", // soft orange
          300: "#ec8f4a", // pastel orange
          400: "#f36617", // vibrant orange
          500: "#d05316", // deeper orange
          600: "#b64714", // darker orange
          700: "#9a3b12", // rich dark orange
          800: "#7d2e10", // very dark orange
          900: "#611c0e", // darkest orange
        },
        redAccent: {
          100: "#f8d0d0", // light pink
          200: "#f1a8a8", // soft red
          300: "#e67272", // vibrant red
          400: "#db4f4a", // rich red
          500: "#c52d2d", // dark red
          600: "#b12b2b", // crimson
          700: "#9b2525", // ruby
          800: "#7a1d1d", // garnet
          900: "#5c1212", // dark garnet
        },
      }
    : {
      //light mode
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#ffffff",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
          1100: "white",
        },
        primary: {
          100: "#f8c7a1", // light orange
          200: "#f2a375", // soft orange
          300: "#ec8f4a", // pastel orange
          400: "#f36617", // vibrant orange
          500: "#d05316", // deeper orange
          600: "#b64714", // darker orange
          700: "#9a3b12", // rich dark orange
          800: "#7d2e10", // very dark orange
          900: "#611c0e", // darkest orange
          
        },
        greenAccent: {
          100: "#1e54ae", // very light blue
          200: "#1e54ae", // light blue
          300: "#1e54ae", // soft blue
          400: "#1e54ae", // pastel blue
          500: "#1e54ae", // vibrant blue
          600: "#1e54ae", // royal blue
          700: "#1e54ae", // deep blue
          800: "#1e54ae", // dark blue
          900: "#1e54ae", // navy blue
        },
        redAccent: {
          100: "#5c1212", // dark garnet
          200: "#7a1d1d", // garnet
          300: "#9b2525", // ruby
          400: "#b12b2b", // crimson
          500: "#c52d2d", // dark red
          600: "#db4f4a", // rich red
          700: "#e67272", // vibrant red
          800: "#f1a8a8", // soft red
          900: "#f8d0d0", // light pink
        },
        blueAccent: {
          100: "#1e54ae", // very light blue
          200: "#1e54ae", // light blue
          300: "#1e54ae", // soft blue
          400: "#000000", // pastel blue
          500: "#1e54ae", // vibrant blue
          600: "#1e54ae", // royal blue
          700: "#1e54ae", // deep blue
          800: "#1e54ae", // dark blue
          900: "#1e54ae", // navy blue
          
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#f5c7a3",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};

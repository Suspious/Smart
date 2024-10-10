import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#D2D2D2",
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
          100: "#2e2e2e", // light gray
          200: "#242424", // darker gray
          300: "#1b1b1b", // dark gray
          400: "#2C2C2C", // almost black
          500: "#1b1b1b", // deep black
          600: "#141414", // darker black
          700: "#080808", // very dark black
          800: "#050505", // almost pitch black
          900: "#030303",  // darker darkest navy blue
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
        text: {
          100: "#A0A0A0",
          200: "#EE7202"
        },
        buttons: 
        {
          100: "#d05316", 
          200: ""
        }
      }
    : {
      //light mode
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#D2D2D2",
          400: "#ffffff",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
          1100: "white",
        },
        primary: {
          100: "#ffffff", // pure white
          200: "#f2f2f2", // very light gray
          300: "#e6e6e6", // light gray
          400: "#cccccc", // soft gray
          500: "#b3b3b3", // medium gray
          600: "#999999", // darker gray
          700: "#808080", // deep gray
          800: "#666666", // darker gray
          900: "#4d4d4d", // very dark gray // very dark gray
         
          
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
          500: "#EE7202", // vibrant blue
          600: "#EE7202", // royal blue
          700: "#1e54ae", // deep blue
          800: "#1e54ae", // dark blue
          900: "#1e54ae", // navy blue
          
        },
        text: {
          100: "#A0A0A0",
          200: "#004f9e",
          300: "#DDDDDD",
        },
        buttons: 
        {
          100: "#004f9e", 
          200: ""
        }
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
              default: "#2C2C2C",
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
              default: "white",
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

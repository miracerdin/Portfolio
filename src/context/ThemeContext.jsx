import { createTheme } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [toggleDark, settoggleDark] = useState(true);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e3f2fd",
        light: "#F2D2BD",
        dark: "#111",
      },
      secondary: {
        main: "#fce4ec",
      },
    },
  });
  const themeDark = createTheme({
    palette: {
      primary: {
        main: "#111",
        light: "#fff",
        dark: "#111",
      },
      secondary: {
        main: "#fce4ec",
      },
    },
  });
  const values = { theme, themeDark, toggleDark, settoggleDark };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

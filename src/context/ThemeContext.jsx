import { createTheme } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#e3f2fd",
        light: "#2E3B55",
      },
      secondary: {
        main: "#fce4ec",
      },
    },
  });
  const values = { theme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

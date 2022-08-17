import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import React, { useContext } from "react";
import Carousell from "../components/Carousel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ProjectsContext } from "../context/ProjectsContext";
import { ThemeContext } from "../context/ThemeContext";
const Home = () => {
  const { projects } = useContext(ProjectsContext);
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  const insideTheme = createTheme();

  insideTheme.typography.h2 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [insideTheme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <Box
      sx={{
        background: toggleDark
          ? theme.palette.primary.light
          : themeDark.palette.primary.main,
        color: toggleDark
          ? theme.palette.primary.dark
          : themeDark.palette.primary.light,
        height: "100vh",
        p: "3rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={insideTheme}>
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: toggleDark
              ? theme.palette.primary.dark
              : themeDark.palette.primary.light,
          }}
        >
          <Typewriter
            // options={{
            //   strings: ["Hello"],
            //   autoStart: true,
            //   loop: false,
            // }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello")
                .pauseFor(1000)
                .deleteAll()
                .typeString("My name is Miraç")
                .start();
            }}
          />
        </Typography>

        <Typography
          variant="h2"
          gutterBottom
          sx={{
            color: toggleDark
              ? theme.palette.primary.dark
              : themeDark.palette.primary.light,
          }}
        >
          <Typewriter
            // options={{
            //   delay: "250",
            //   autoStart: true,
            //   loop: false,
            // }}
            onInit={(typewriter) => {
              typewriter.typeString("I am a Frontend Developer ").start();
            }}
          />
        </Typography>
      </ThemeProvider>

      <Carousell />
    </Box>
  );
};

export default Home;

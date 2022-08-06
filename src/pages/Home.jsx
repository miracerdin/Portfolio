import { Box, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import React, { useContext } from "react";
import Carousell from "../components/Carousel";
import { ProjectsContext } from "../context/ProjectsContext";
import { ThemeContext } from "../context/ThemeContext";
const Home = () => {
  const { projects } = useContext(ProjectsContext);
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Box
      sx={{
        bgcolor: "bisque",
        height: "100vh",
        p: "3rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
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
      <Typography variant="h2" gutterBottom sx={{ color: "black" }}>
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

      <Carousell />
    </Box>
  );
};

export default Home;

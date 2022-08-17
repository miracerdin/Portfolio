import { Box, Typography } from "@mui/material";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const About = () => {
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  return (
    <Box
      container
      sx={{
        mt: "2rem",
        height: "100vh",
        padding: "1rem ",
        background: toggleDark
          ? theme.palette.primary.light
          : themeDark.palette.primary.main,
        color: toggleDark
          ? theme.palette.primary.dark
          : themeDark.palette.primary.light,
      }}
    >
      <Typography variant="h2">My name is Miraç.</Typography>
      <Typography variant="body1">
        +3 years experienced in IT and an front-end developer, interested in
        writing codes, skilled at developing complex solutions, creating
        responsive designs, possessing strong creative thinking skills, high
        energy and integrity. Ability to create algorithms effectively, and
        interact positively and communicate appropriately with team members.
        Quickly grasp new technologies and concepts to develop innovative and
        creative solutions to problems. Always eager to learn various
        technologies, tools and libraries. Especially interested in the
        Frontend/Web Development, HTML, CSS, Bootstrap,Sass, JavaScipt, React,
        Jira, Python. Excited to learn new things and improve, lifetime student.{" "}
      </Typography>
    </Box>
  );
};

export default About;

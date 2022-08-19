import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
const About = () => {
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  return (
    <Box
      container
      sx={{
        display: "flex",
        mt: "1rem",
        height: "100vh",
        padding: "2rem 1rem",
        whiteSpace: "break-word",
        background: toggleDark
          ? theme.palette.primary.light
          : themeDark.palette.primary.main,
        color: toggleDark
          ? theme.palette.primary.dark
          : themeDark.palette.primary.light,
      }}
    >
      <Box sx={{ width: "900px", margin: "auto" }}>
        <Box
          component="img"
          className="images"
          src="https://cdn.webtekno.com/media/cache/content_detail_v2/article/73687/bir-yazilimci-olarak-evden-calismak-icin-ne-yapmak-gerekir-1564924297.jpg"
        ></Box>

        <Typography variant="h2" sx={{}}>
          My name is Miraç.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "600",
            letterSpacing: "2px",
            textAlign: "justify",
            // float: "left",
            padding: "0 10px 10px 10px",
          }}
        >
          +3 years experienced in IT and an front-end developer, interested in
          writing codes, skilled at developing complex solutions, creating
          responsive designs, possessing strong creative thinking skills, high
          energy and integrity. Ability to create algorithms effectively, and
          interact positively and communicate appropriately with team members.
          Quickly grasp new technologies and concepts to develop innovative and
          creative solutions to problems. Always eager to learn various
          technologies, tools and libraries. Especially interested in the
          Frontend/Web Development, HTML, CSS, Bootstrap,Sass, JavaScipt, React,
          Jira, Python. Excited to learn new things and improve, lifetime
          student.
        </Typography>
        <List sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
          <Box component="h3">Using Technologies</Box>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JAVASCRİPT</ListItem>
          <ListItem>REACT</ListItem>
          <ListItem>BOOTSTRAP</ListItem>
          <ListItem>MATERIAL-UI</ListItem>
          <ListItem>FİREBASE</ListItem>
          <ListItem>CONTEXT API/REDUX</ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default About;

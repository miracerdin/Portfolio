import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
const About = () => {
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  const { t } = useTranslation(["about"]);
  return (
    <Box
      container
      sx={{
        display: "flex",
        mt: "1rem",
        minHeight: "100vh",
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
          {t("MyNameIsMirac")}
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
          {t("description")}
        </Typography>
        <List sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
          <Box component="h3">{t("usingTech")}</Box>
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

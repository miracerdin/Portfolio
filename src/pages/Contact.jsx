import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Box } from "@mui/system";
const Contact = () => {
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);
  return (
    <Box
      container
      bgcolor={theme.palette.secondary.light}
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        background: toggleDark
          ? theme.palette.primary.light
          : themeDark.palette.primary.main,
        color: toggleDark
          ? theme.palette.primary.dark
          : themeDark.palette.primary.light,
      }}
    >
      <Grid container spacing="2">
        <Grid item xs={12} sm={4} textAlign="center">
          <Link href="https://github.com/miracerdin?tab=repositories">
            <GitHubIcon
              sx={{
                fontSize: 80,
                cursor: "pointer",
                background: toggleDark
                  ? theme.palette.primary.light
                  : themeDark.palette.primary.main,
                color: toggleDark
                  ? theme.palette.primary.dark
                  : themeDark.palette.primary.light,
              }}
              // color={theme.palette.secondary.main}
            />
          </Link>
          <Typography>Github</Typography>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Link href="https://www.linkedin.com/in/mirac-erdin/">
            <LinkedInIcon
              sx={{
                fontSize: 80,
                cursor: "pointer",
                background: toggleDark
                  ? theme.palette.primary.light
                  : themeDark.palette.primary.main,
                color: toggleDark
                  ? theme.palette.primary.dark
                  : themeDark.palette.primary.light,
              }}
            />
          </Link>
          <Typography>Linkedin</Typography>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Link href="mailto:miracerdin@gmail.com">
            <EmailIcon
              sx={{
                fontSize: 80,
                cursor: "pointer",
                background: toggleDark
                  ? theme.palette.primary.light
                  : themeDark.palette.primary.main,
                color: toggleDark
                  ? theme.palette.primary.dark
                  : themeDark.palette.primary.light,
              }}
            />
          </Link>
          <Typography>Mail</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;

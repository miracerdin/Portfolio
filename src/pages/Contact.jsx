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
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
} from "@mui/material";
import SendMail from "./SendMail";

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
        justifyContent: "center",
        flexDirection: "column",
        background: toggleDark
          ? theme.palette.primary.light
          : themeDark.palette.primary.main,
        color: toggleDark
          ? theme.palette.primary.dark
          : themeDark.palette.primary.light,
        position: "relative",
      }}
    >
      <Box>
        <Grid
          container
          spacing="4"
          // sx={{ gap: "1rem" }}
        >
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
      <SendMail />
      {/* <Container component="main" maxWidth="xs">
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          action="https://formsubmit.co/miracerdin@gmail.com"
          method="POST"
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                className={toggleDark ? "darkTextField" : "lightTextField"}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                className={toggleDark ? "darkTextField" : "lightTextField"}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className={toggleDark ? "darkTextField" : "lightTextField"}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your text"
                placeholder="Contact with me"
                multiline
                type="text"
                name="textarea"
                rows={2}
                maxRows={4}
                className={toggleDark ? "darkTextField" : "lightTextField"}
                required
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid> */}
      {/* </Grid>
          <Grid>
            <TextField
              type="hidden"
              name="_captcha"
              value="false"
              sx={{ border: "none", display: "none" }}
            />
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="outlined"
            className={toggleDark ? "darkTextField" : "lightTextField"}
            sx={{
              mt: 3,
              mb: 2,
              // color: toggleDark
              //   ? theme.palette.primary.light
              //   : themeDark.palette.primary.dark,
              // background: toggleDark
              //   ? theme.palette.primary.main
              //   : themeDark.palette.primary.light,
            }}
          >
            Send Mail
          </Button> */}
      {/* <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
      {/* </Box>
      </Container> */}
    </Box>
  );
};

export default Contact;

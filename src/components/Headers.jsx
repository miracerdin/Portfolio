import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./HeadersStyles";
import Navbar from "./Navbar";

export default function Headers() {
  const classes = useStyles();
  return (
    <Box className={classes.HeaderWrapper}>
      <Navbar />
      <Box className={classes.Headercontaier}>
        <Typography variant="h2">Hello webdevelopers</Typography>
      </Box>
    </Box>
  );
}

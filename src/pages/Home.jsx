import { Box, Typography } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import React, { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";
import { ThemeContext } from "../context/ThemeContext";
const Home = () => {
  const { projects } = useContext(ProjectsContext);
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <Box
      bgcolor={theme.palette.primary.main}
      sx={{ mt: 8, height: "100vh", display: "flex" }}
    >
      {projects.length !== 0 ? (
        <img
          src={projects[0].owner.avatar_url}
          alt="avatar"
          style={{ width: "250px", height: "400px", margin: "0.5rem" }}
        />
      ) : (
        <Skeleton
          sx={{ bgcolor: "grey.900" }}
          variant="rectangular"
          width={250}
          height={400}
        />
      )}
      <Typography variant="h1" display="block">
        Hi, I'm Miraç
      </Typography>
    </Box>
  );
};

export default Home;

import React, { useContext } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, CardMedia } from "@mui/material";
import { ProjectsContext } from "../context/ProjectsContext";
const defaultImage = "https://picsum.photos/500/300";
export default function Carousell(props) {
  const { projects } = useContext(ProjectsContext);
  console.log(projects);
  //   const items = [
  //     {
  //       name: { projects.name },
  //       description: { projects.description },
  //       image: { homepage },
  //     },
  //     {
  //       name: { name },
  //       description: { projects.description },
  //       image: { homepage },
  //     },
  //     {
  //       name: { name },
  //       description: { description },
  //       image: { homepage },
  //     },
  //   ];

  return (
    <Carousel
      sx={{
        width: "500px",
        height: "500px",
        p: "1rem",
        m: "1rem",
        textAlign: "center",
        justifyContent: "center",
      }}
    >
      {projects.map((item, id) => (
        <Item key={id} {...item} />
      ))}
    </Carousel>
  );
}

const Item = ({ name, description, image }) => {
  return (
    <Paper>
      <CardMedia
        component="img"
        height="250px"
        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        image={defaultImage}
        alt="Paella dish"
      />
      <h2>{name}</h2>
      <p>{description}</p>
      {/* <Button>more info...</Button> */}
    </Paper>
  );
};

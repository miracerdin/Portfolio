import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useContext } from "react";
import Typography from "@mui/material/Typography";
// import axios from "axios";
import Link from "@mui/material/Link";
import Search from "../components/Search";
import { ProjectsContext } from "../context/ProjectsContext";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ThemeContext } from "../context/ThemeContext";
import Select from "../components/Select";

const defaultImage = "https://picsum.photos/200/300";

const Portfolio = () => {
  // const [projects, setProjects] = React.useState([]);
  const [searched, setSearched] = React.useState("");
  const [categories, setCategories] = React.useState("");
  const [filteredData, setFilteredData] = React.useState([]);
  const { projects, setProjects } = useContext(ProjectsContext);
  const { theme } = useContext(ThemeContext);

  // console.log(
  //   projects.filter((product) => product.topics.includes(categories))
  // );
  // console.log(categories);
  React.useEffect(() => {
    let filtered = projects || [];
    if (categories) {
      filtered = projects.filter((product) =>
        product.topics.includes(categories)
      );
      console.log(filtered);
    }
    if (categories === "All" || categories === "Categories") {
      filtered = projects;
    }
    if (searched !== "") {
      filtered = filtered.filter((product) => product?.name.includes(searched));
    }
    setFilteredData(filtered);
  }, [projects, categories, searched]);
  console.log(projects);
  console.log(searched);

  return (
    <Box>
      <Grid
        spacing={2}
        sx={{ gap: "1rem", my: "1rem" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Search
            projects={projects}
            searched={searched}
            setSearched={setSearched}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Select categories={categories} setCategories={setCategories} />
        </Grid>
      </Grid>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          height: "100%",
          bgcolor: theme.palette.secondary.main,
        }}
      >
        {searched === "" ? (
          filteredData.map((project) => {
            return (
              <Card
                key={project.id}
                sx={{
                  width: 345,
                  m: 1,
                  bgcolor: "#fff",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "space-between",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <CardMedia
                    component="img"
                    height="140"
                    sx={{ width: "100%" }}
                    image={defaultImage}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Box>
                <Box>
                  <CardActions>
                    <Link
                      href={project.homepage || "#"}
                      bgcolor={theme.palette.primary.light}
                      color={theme.palette.secondary.main}
                      sx={{
                        borderRadius: "5px",
                        padding: "5px 10px",
                        textDecoration: "none",
                      }}
                    >
                      Home page
                    </Link>
                    <Link
                      href={project.html_url}
                      bgcolor={theme.palette.primary.light}
                      color={theme.palette.secondary.main}
                      sx={{
                        borderRadius: "5px",
                        padding: "5px 10px",
                        textDecoration: "none",
                      }}
                    >
                      Code
                    </Link>
                  </CardActions>
                </Box>
              </Card>
            );
          })
        ) : filteredData.filter((project) =>
            project.name.toLowerCase().includes(searched)
          ).length !== 0 ? (
          filteredData
            ?.filter((project) => project.name.toLowerCase().includes(searched))
            .map((item, index) => {
              return (
                <Card
                  key={index}
                  sx={{ width: 345, m: 1, position: "relative" }}
                  bgcolor={theme.palette.secondary.main}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={defaultImage}
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ position: "abolute", bottom: 0 }}>
                    <Link
                      href={item.homepage || "#"}
                      bgcolor={theme.palette.primary.light}
                      color={theme.palette.secondary.main}
                      sx={{
                        borderRadius: "5px",
                        padding: "5px 10px",
                        textDecoration: "none",
                      }}
                    >
                      Home page
                    </Link>

                    <Link
                      href={item.html_url}
                      bgcolor={theme.palette.primary.light}
                      color={theme.palette.secondary.main}
                      sx={{
                        borderRadius: "5px",
                        padding: "5px 10px",
                        textDecoration: "none",
                      }}
                    >
                      Code
                    </Link>
                  </CardActions>
                </Card>
              );
            })
        ) : (
          <div style={{ color: "black" }}>
            There is no project with that name
          </div>
        )}
      </div>
    </Box>
  );
};

export default Portfolio;

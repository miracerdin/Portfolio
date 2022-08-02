import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ProjectsContext } from "../context/ProjectsContext";
import { Avatar } from "@mui/material";

const drawerWidth = 240;
const navItems = [
  { label: "About", Id: "About" },
  { label: "Portfolio", Id: "Portfolio" },
  { label: "Contact", Id: "Contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { projects } = useContext(ProjectsContext);
  const { theme } = useContext(ThemeContext);
  console.log(projects);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src={
          projects.length !== 0
            ? projects[0].owner.avatar_url
            : "https://picsum.photos/200/300"
        }
        sx={{ position: "relative", top: "0.7rem", left: "45%" }}
      />

      <Typography
        onClick={() => navigate("/")}
        variant="h6"
        sx={{ my: 2, cursor: "pointer" }}
      >
        {/* <div>
          {projects.length !== 0 ? (
            <img
              src={projects[0].owner.avatar_url}
              alt="avatar"
              style={{ width: "100px", height: "100px" }}
            />
          ) : (
            <div>loading</div>
          )}
        </div> */}
        {"<Mirac />"}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.Id} disablePadding>
            <ListItemButton
              onClick={() => handleClick(item.Id)}
              key={item.Id}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" style={{ background: "#2E3B55" }}>
        <Toolbar bg="#b39ddb">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={() => navigate("/")}
            sx={{
              flexGrow: 1,
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
          >
            {"<Mirac />"}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => handleClick(item.Id)}
                key={item.Id}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 0.2 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;

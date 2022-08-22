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
import {
  Avatar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

const languages = [
  { value: "", text: "Options" },
  { value: "en", text: "English" },
  { value: "tr", text: "Turkish" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { projects } = useContext(ProjectsContext);
  const { theme, themeDark, toggleDark, settoggleDark, language, setLanguage } =
    useContext(ThemeContext);
  const { t, i18n } = useTranslation(["navbar"]);
  React.useEffect((e) => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const navItems = [
    { label: `${t("About")}`, Id: "About" },
    { label: `${t("Portfolio")}`, Id: "Portfolio" },
    { label: `${t("Contact")}`, Id: "Contact" },
  ];
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    setLanguage(!language);
  };

  console.log(toggleDark);
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        boxShadow:
          " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
      }}
    >
      <Avatar
        alt="Remy Sharp"
        src={
          projects.length !== 0
            ? projects[0].owner.avatar_url
            : "https://picsum.photos/200/300"
        }
        sx={{ top: "0.7rem", left: "45%" }}
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
      <Switch
        checked={toggleDark}
        onChange={handleModeChange}
        name="toggleDark"
        color="default"
      />
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
      <AppBar
        component="nav"
        style={{
          background: toggleDark
            ? theme.palette.primary.light
            : themeDark.palette.primary.main,
          color: toggleDark
            ? theme.palette.primary.dark
            : themeDark.palette.primary.light,
        }}
      >
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
          <Box>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Languages
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={localStorage.getItem("i18nextLng")}
                onChange={handleLanguageChange}
                autoWidth
                label="Language"
              >
                {languages.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item.value}>
                      {item.text}
                    </MenuItem>
                  );
                })}
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem> */}
              </Select>
            </FormControl>
          </Box>
          <Switch
            checked={toggleDark}
            onChange={handleModeChange}
            name="toggleDark"
            color="default"
          />

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => handleClick(item.Id)}
                key={item.Id}
                sx={{
                  color: toggleDark
                    ? theme.palette.primary.dark
                    : themeDark.palette.primary.light,
                }}
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
      <Box component="main" sx={{ p: 2 }}></Box>
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

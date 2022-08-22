import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
// import { ProjectsContext } from "../context/ProjectsContext";
import { ThemeContext } from "../context/ThemeContext";

export default function BasicSelect({ categories, setCategories }) {
  // const { projects } = useContext(ProjectsContext);
  const { theme, themeDark, toggleDark } = useContext(ThemeContext);

  console.log(categories);

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box
      sx={{
        minWidth: 120,
        maxWidth: "250px",
        alignItems: "center",
        color: "white",
      }}
      //   sx={{
      //     "& .MuiTextField-root": { m: "auto", width: "25ch" },
      //   }}
    >
      <FormControl
        fullWidth
        sx={{
          border: `1px solid ${
            toggleDark
              ? theme.palette.primary.dark
              : themeDark.palette.primary.light
          }`,
        }}
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            color: toggleDark
              ? theme.palette.primary.dark
              : themeDark.palette.primary.light,
          }}
        >
          Categories
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={categories}
          label="Categories"
          onChange={handleChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="react">React</MenuItem>
          <MenuItem value="javascript">Javascript</MenuItem>
          <MenuItem value="html5">HTML</MenuItem>
          <MenuItem value="firebase">Firebase</MenuItem>
          <MenuItem value="python">Python</MenuItem>
          <MenuItem value="tailwind">Tailwind</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

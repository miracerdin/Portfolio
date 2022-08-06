import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext } from "react";
import { ProjectsContext } from "../context/ProjectsContext";

export default function BasicSelect({ categories, setCategories }) {
  const { projects } = useContext(ProjectsContext);

  console.log(categories);

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <Box
      sx={{ minWidth: 120, maxWidth: "250px", alignItems: "center" }}
      //   sx={{
      //     "& .MuiTextField-root": { m: "auto", width: "25ch" },
      //   }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categories</InputLabel>
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

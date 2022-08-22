import axios from "axios";
import { createContext, useEffect, useState } from "react";

//? Context olusturuldu. Defining
export const ProjectsContext = createContext();

const ProjectsContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    const data = await axios.get(
      "https://api.github.com/users/miracerdin/repos?per_page=100"
    );
    console.log(data.data);
    console.log(projects);
    setProjects(data.data.filter((data) => data.fork !== true));
  };
  useEffect(() => {
    getData();
  }, []);

  const values = { projects, setProjects };

  return (
    <ProjectsContext.Provider value={values}>
      {children}
    </ProjectsContext.Provider>
  );
};
export default ProjectsContextProvider;

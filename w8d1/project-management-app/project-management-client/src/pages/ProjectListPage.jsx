import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddProjectForm from "../components/AddProjectForm";
 
function ProjectListPage() {
  const [projects, setProjects] = useState([]);
 
  const getAllProjects = () => { //fetch all projects and update state variable
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );
 
  if(projects.length === 0){
    return <p>Loading...</p>
  }
  
  return (
    <div className="ProjectListPage">
        <AddProjectForm refreshProjects={getAllProjects}/>

        {projects.map((project) => {
          return (
            <div className="ProjectCard card" key={project._id} >
              <Link to={`/projects/${project._id}`}>
                <h3>{project.title}</h3>
              </Link>
            </div>
          );
        })}     
       
    </div>
  );
}
 
export default ProjectListPage;
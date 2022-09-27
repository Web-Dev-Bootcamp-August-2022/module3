import { useState, useEffect } from "react";
import axios from "axios";
import AddProjectForm from "../components/AddProjectForm";
import ProjectCard from "../components/ProjectCard";
 
function ProjectListPage() {
  const [projects, setProjects] = useState([]); // 1. Set a state variable which will store the data from your API
 
  const getAllProjects = () => { //4.Fetch all projects and update state variable
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
 
  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => { // 3. useEffect will execute getAllProjects()
    getAllProjects();
  }, [] );
 
  if(projects.length === 0){ // 2. Display this while we wait for the data from the API to load
    return <p>Loading...</p>
  }
  
  return ( // 5. Render this after state variable 'projects' update
    <div className="ProjectListPage">
        <AddProjectForm refreshProjects={getAllProjects}/>

        {projects.map((project) => {
          return (
            <ProjectCard key={project._id} _id={project._id} title={project.title} description={project.description} />
            // <div className="ProjectCard card" key={project._id} >
            //   <Link to={`/projects/${project._id}`}>
            //     <h3>{project.title}</h3>
            //   </Link>
            // </div>
          );
        })}     
       
    </div>
  );
}
 
export default ProjectListPage;
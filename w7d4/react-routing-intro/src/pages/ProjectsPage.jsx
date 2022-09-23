import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
 
function ProjectsPage(props) {
  // 1. initializing 'projects' to be an empty array
  const [projects, setProjects] = useState([]); 
  const { projectsData } = props;
  console.log('projectsData', projectsData)
  // This effect will run only once on initial render.
  // To do it we set the dependency array empty [].
  useEffect(() => { // 3. Update our state variable 'projects'
    setProjects(projectsData);
  }, []);
 
  if(projects.length === 0){ // 2. if our projects state variable is an empty array
    return <p>Loading...</p>
  }
  return ( // 4. Display our list of projects
    <div>
      <h2>Projects</h2>
      {projects.map((project) => <ProjectCard project={project} key={project._id}/> )}
    </div>
  );
}
 
export default ProjectsPage;
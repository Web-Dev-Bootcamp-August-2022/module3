import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects-data.json';
 
function ProjectDetailsPage(props) {
  const [project, setProject] = useState({}); // 1. Initialize 'project' to be an empty object

  const params = useParams();
  console.log('params.projectId -->', params.projectId);

  useEffect(() => { // 3. Update 'project' state variable with project data
    const currentProject = projectsData.find(project => project._id === params.projectId);
    
    if(currentProject){
      setProject(currentProject);
    }
    
    // console.log('currentProject', currentProject);
    // eslint-disable-next-line
  },[params.projectId])
  

  // !project.hasOwnProperty('name')
  if(Object.keys(project).length === 0){ // 2. Check if 'project' is an empty object and if yes render Loading
    return <p>Loading...</p>
  }

  return ( // 4. If project is not an empty object, render project data 
    <div>
      <h1>Project Details</h1>
      <br/>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <p>{project.year}</p>
      
      <Link to="/projects">Back</Link>
    </div>
  )
}
 
export default ProjectDetailsPage;
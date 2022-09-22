import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects-data.json';
 
function ProjectDetailsPage(props) {
  
  const [project, setProject] = useState({});

  const { projectId } = useParams();
  console.log('projectId -->', projectId);

  useEffect(() => {
    const currentProject = projectsData.find(project => project._id === projectId);
    setProject(currentProject);
    // console.log('currentProject', currentProject);
  },[projectId])
  
  return (
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
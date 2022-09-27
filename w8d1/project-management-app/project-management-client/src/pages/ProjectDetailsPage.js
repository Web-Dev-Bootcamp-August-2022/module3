import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTaskForm";
 
 
function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null); // 1. Define a State variable for the upcoming project
  
  const { projectId } = useParams(); // 2. Getting the projectId
 
  const getProject = () => {          //  <== ADD A NEW FUNCTION
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects/${projectId}`)
      .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => { // 4. useEffect will execute once and fetch specific project
    getProject();
    // eslint-disable-next-line
  },[])
  
  if(project === null){ // 3. Display this while we wait for the data from the API to load
    return <p>Loading project...</p>
  }

  return ( // 5. Render this after state variable 'project' receives the data from the API
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </>
      )}
 
      {project &&
        project.tasks.map((task) => (
          <li className="TaskCard card" key={task._id}>
            <h3>{task.title}</h3>
            <h4>Description:</h4>
            <p>{task.description}</p>
          </li>
      ))}
 
      <AddTask refreshProject={getProject} projectId={projectId} /> 

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${projectId}`}>
        <button>Edit Project</button>
      </Link>   
    </div>
  );
}
 
export default ProjectDetailsPage;
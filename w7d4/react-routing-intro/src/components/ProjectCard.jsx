import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    const { project } = props;
  return (
    <div className="project">
        <Link to={`/projects/${project._id}`}><h3>{project.name}</h3></Link>
        <p>{project.technologies}</p>
    </div>
  )
}

export default ProjectCard
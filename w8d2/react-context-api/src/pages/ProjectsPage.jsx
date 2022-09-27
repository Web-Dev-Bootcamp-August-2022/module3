import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects-data.json';
 
function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
 
  return (
    <div className="ProjectsPage">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map(p => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}
 
export default ProjectsPage;
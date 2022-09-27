import { useState, useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects-data.json';
 
function ProjectsPage() {
  const [projects, setProjects] = useState(projectsData);
  const { theme } = useContext(ThemeContext); // --> shorthand of const theme = useContext(ThemeContext).theme 
                                                // For Johanna :)
  return (
    <div className={`ProjectsPage ${theme}`}>
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
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePageWithNavigate';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import QueryStringExample from './pages/QueryStringExample';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import projectsData from "./data/projects-data.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage projectsData={projectsData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/example" element={ <QueryStringExample /> } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;

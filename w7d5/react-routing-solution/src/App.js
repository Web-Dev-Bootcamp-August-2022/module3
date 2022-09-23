import Navbar from "./components/Navbar";      
import HomePage from "./pages/HomePage";       
import AboutPage from "./pages/AboutPage";     
import ProjectsPage from "./pages/ProjectsPage";   
import ErrorPage from "./pages/ErrorPage";         
import { Routes, Route } from "react-router-dom";  
import projectsData from "./data/projects-data.json";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      {/*   Add <Route /> components between <Routes> and </Routes>   */} 
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
        <Route path="*" element={ <ErrorPage /> } /> 
      </Routes>
      
    </div>
  );
}

export default App;

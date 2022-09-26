import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/projects"} element={<ProjectsPage />} />
        <Route path={"/projects/:projectId"} element={<ProjectDetailsPage />} />
        <Route path={"/projects/edit/:projectId"} element={<EditProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;

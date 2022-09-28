import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProjectListPage from "./pages/ProjectListPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<IsAnon><SignUpPage /></IsAnon>} />
        <Route exact path="/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route exact path="/projects" element={<IsPrivate> <ProjectListPage /> </IsPrivate> } />
        <Route exact path="/projects/:projectId" element={<IsPrivate> <ProjectDetailsPage /> </IsPrivate>} />
        <Route exact path="/projects/edit/:projectId" element={<IsPrivate> <EditProjectPage /> </IsPrivate>} />           
      </Routes>
    </div>
  );
}

export default App;

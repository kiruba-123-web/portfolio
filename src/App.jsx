import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Portfolio from "./pages/Portfolio";
import ProjectDetails from "./pages/ProjectDetails";
import Achievements from "./Data/Achievements";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      
    </Routes>
  );
}

export default App;
import { Routes, Route } from "react-router-dom";
import Welcome from "./Pages/welcome";
import Portfolio from "./Pages/Portfolio";
import ProjectDetails from "./Pages/ProjectDetails";
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
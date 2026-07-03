import Hero from "../components/Hero";
import Navbar from "../Components/Navbar";
import Aboutme from "../Components/Aboutme"
import Skills from "../Data/Skills";
import Projects from "../Data/Projects";
import Achievements from "../Data/Achievements";


import VoiceAssistant from "../Components/VoiceAssistant";
import Footer from "../Components/Footer";
const Portfolio = () => {
  return (
    <div className="bg-black text-white">
      <Hero />
      <Navbar />
      <Aboutme />
      <Skills />
      <Projects />
      <Achievements />
     
      
      <VoiceAssistant />
      <Footer />
    </div>
  );
};

export default Portfolio;
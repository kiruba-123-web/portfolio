import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-purple-500">
          Projects
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-6 text-lg">
          Some of the projects I have built using the MERN Stack.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Question Bank */}
        <div className="bg-[#081222] rounded-3xl p-8 border border-gray-800 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-5">📚</div>

          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            Question Bank System
          </h3>

          <p className="text-gray-300 leading-8">
            Full Stack MERN application for managing and accessing
            previous year question papers.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              React
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              Express.js
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              MongoDB
            </span>
          </div>

          <button
            onClick={() =>
              setSelectedProject("questionbank")
            }
            className="mt-8 bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            View Details
          </button>
        </div>

        {/* SkillScan */}
        <div className="bg-[#081222] rounded-3xl p-8 border border-gray-800 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-5">🤖</div>

          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            SkillScan AI
          </h3>

          <p className="text-gray-300 leading-8">
            AI-powered platform for analyzing and evaluating
            technical skills.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              React
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              Node.js
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              MongoDB
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              AI
            </span>
          </div>

          <button
            onClick={() =>
              setSelectedProject("skillscan")
            }
            className="mt-8 bg-cyan-500 text-black px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
          >
            View Details
          </button>
        </div>

        {/* Portfolio */}
        <div className="bg-[#081222] rounded-3xl p-8 border border-gray-800 hover:border-purple-500 hover:-translate-y-2 transition-all duration-300">
          <div className="text-5xl mb-5">🎤</div>

          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            AI Resume Portfolio
          </h3>

          <p className="text-gray-300 leading-8">
            Voice-enabled portfolio that answers recruiter
            questions about resume and projects.
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              React
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              Speech API
            </span>

            <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">
              AI
            </span>
          </div>

          <button
            onClick={() =>
              setSelectedProject("portfolio")
            }
            className="mt-8 bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Details Section */}
      {selectedProject && (
        <div className="mt-12 bg-[#081222] border border-purple-500 rounded-3xl p-10 max-w-5xl mx-auto">
          {selectedProject === "questionbank" && (
            <>
              <h3 className="text-4xl font-bold text-purple-400 mb-6">
                Question Bank System
              </h3>

              <ul className="space-y-4 text-gray-300 text-lg">
                <li>• Upload and manage question papers.</li>
                <li>• Filter by subject and year.</li>
                <li>• Search functionality.</li>
                <li>• MongoDB database integration.</li>
                <li>• MERN Stack architecture.</li>
              </ul>
            </>
          )}

          {selectedProject === "skillscan" && (
            <>
              <h3 className="text-4xl font-bold text-cyan-400 mb-6">
                SkillScan AI
              </h3>

              <ul className="space-y-4 text-gray-300 text-lg">
                <li>• AI-based skill analysis.</li>
                <li>• Technical assessment system.</li>
                <li>• Performance report generation.</li>
                <li>• Recommendation engine.</li>
              </ul>
            </>
          )}

          {selectedProject === "portfolio" && (
            <>
              <h3 className="text-4xl font-bold text-purple-400 mb-6">
                AI Resume Portfolio
              </h3>

              <ul className="space-y-4 text-gray-300 text-lg">
                <li>• Voice assistant support.</li>
                <li>• Speech Recognition API.</li>
                <li>• Text to Speech support.</li>
                <li>• Recruiter interaction feature.</li>
              </ul>
            </>
          )}

          <button
            onClick={() => setSelectedProject(null)}
            className="mt-8 bg-red-500 px-6 py-3 rounded-xl hover:bg-red-600 transition"
          >
            Close Details
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
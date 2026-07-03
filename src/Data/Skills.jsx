const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 md:px-16 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold">
          My <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-4"></div>

        <p className="text-gray-400 mt-6 text-lg">
          Technologies and tools I use to build modern web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">

        {/* Frontend */}
        <div className="bg-[#081222] rounded-2xl p-6 border border-gray-800 min-h-[220px] hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold text-cyan-400 mb-5">
            💻 Frontend
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">HTML5</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">CSS3</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">JavaScript</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">React.js</span>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-[#081222] rounded-2xl p-6 border border-gray-800 min-h-[220px] hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold text-cyan-400 mb-5">
            ⚙️ Backend
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Node.js</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Express.js</span>
          </div>
        </div>

        {/* Database */}
        <div className="bg-[#081222] rounded-2xl p-6 border border-gray-800 min-h-[220px] hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold text-cyan-400 mb-5">
            🗄️ Database
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">MongoDB</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">MongoDB Atlas</span>
          </div>
        </div>

        {/* Tools */}
        <div className="bg-[#081222] rounded-2xl p-6 border border-gray-800 min-h-[220px] hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold text-cyan-400 mb-5">
            🛠️ Tools
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">VS Code</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Git</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">GitHub</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Thunder Client</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Nodemon</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">MongoDB Compass</span>
          </div>
        </div>

        {/* Platforms */}
        <div className="bg-[#081222] rounded-2xl p-6 border border-gray-800 min-h-[220px] hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold text-cyan-400 mb-5">
            ☁️ Platforms
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Vercel</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Netlify</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Render</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">MongoDB Atlas</span>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-[#081222] rounded-2xl p-6 border border-gray-800 min-h-[220px] hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-2xl font-bold text-cyan-400 mb-5">
            🤝 Soft Skills
          </h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Problem Solving</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Reasoning Thinking</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Communication</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Team Collaboration</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Time Management</span>
            <span className="bg-gray-800 px-3 py-2 rounded-full text-sm">Adaptability</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
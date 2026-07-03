const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-8 md:px-20 py-24 bg-black text-white"
    >
      {/* Small Heading */}
      <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
        ● Get To Know Me
      </p>

      {/* Main Heading */}
      <h2 className="text-6xl font-bold mb-6">
        About <span className="text-purple-500">Me</span>
      </h2>

      {/* Underline */}
      <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-10"></div>

      {/* Description */}
      <p className="text-gray-300 text-xl leading-10 max-w-5xl mb-20">
        I am <span className="text-white font-semibold">Kiruba Gnanaraj</span>,
        a passionate Full Stack MERN Developer with hands-on experience in
        building modern web applications using React, Node.js, Express.js, and
        MongoDB. I enjoy solving real-world problems through technology and
        continuously improving my development skills.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Education */}
        <div className="bg-[#081222] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">
          <div className="text-5xl mb-6">🎓</div>

          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            Education
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-5"></div>

          <p className="text-gray-300 text-lg">
            Bachelor of Computer Applications (BCA)
          </p>

          <p className="text-gray-400 mt-2">
            Noorul Islam Centre for Higher Education • 2026
          </p>
        </div>

        {/* Projects */}
        <div className="bg-[#081222] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">
          <div className="text-5xl mb-6">💼</div>

          <h3 className="text-3xl font-bold text-cyan-400 mb-4">
            Projects
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-5"></div>

          <p className="text-gray-300 text-lg">
            3+ Full Stack MERN Projects
          </p>

          <p className="text-gray-400 mt-2">
            Including AI Portfolio and Question Bank System
          </p>
        </div>

        {/* Goal */}
        <div className="bg-[#081222] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition duration-300">
          <div className="text-5xl mb-6">🎯</div>

          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            Goal
          </h3>

          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-5"></div>

          <p className="text-gray-300 text-lg">
            Become a Professional Full Stack Developer
          </p>

          <p className="text-gray-400 mt-2">
            Building scalable and impactful applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
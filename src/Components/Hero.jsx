import resume from "../assets/resume.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-purple-700 opacity-20 blur-[150px] rounded-full top-20"></div>

      {/* Profile Circle */}
      <div className="relative">
        <div className="absolute inset-0 bg-purple-600 rounded-full blur-3xl opacity-50 animate-pulse"></div>

        <div className="relative w-52 h-52 rounded-full bg-gradient-to-br from-purple-500 via-fuchsia-500 to-purple-700 flex items-center justify-center text-7xl font-bold text-white shadow-[0_0_60px_rgba(168,85,247,0.7)]">
          KG
        </div>
      </div>

      {/* Name */}
      <h1 className="text-6xl md:text-8xl font-extrabold mt-10 bg-gradient-to-r from-white via-gray-200 to-purple-400 bg-clip-text text-transparent">
        Kiruba Gnanaraj
      </h1>

      {/* Role */}
      <h2 className="text-2xl md:text-3xl font-semibold mt-5 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
        Full Stack MERN Developer
      </h2>

      {/* Description */}
      <p className="max-w-3xl text-gray-400 mt-8 text-lg leading-9">
        Passionate Full Stack Developer specializing in
        React, Node.js, Express.js and MongoDB.
        Building scalable web applications and
        AI-powered solutions.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-6 mt-10">
        <a
          href={resume}
          download
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.8)] transition duration-300"
        >
          Download Resume
        </a>

        <a
          href="#contact"
          className="px-8 py-4 rounded-xl border border-purple-500 text-white font-semibold hover:bg-purple-600 hover:border-purple-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;